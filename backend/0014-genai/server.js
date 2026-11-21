import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";
import { tool, createAgent } from "langchain";
import { StateGraph, START, END } from '@langchain/langgraph'
import * as z from "zod";
dotenv.config();

const events = [];

const createEventTool = tool(
  async function ({ date, title, description }) {
    events.push({
      date,
      title,
      description,
    });
    return "Event created";
  },
  {
    name: "createEvent",
    description: "creaet a new event with a date, title and description",
    schema: z.object({
      data: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  },
);

const getEventsTool = tool(
  async function ({ }) {
    console.log("***********\nRetrieves events\n**********");
    return events;
  },
  {
    name: "getEvents",
    description: "Retrieves all events",
    schema: z.object({}),
  },
)

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API,
});

async function LLMNode(state) {
  console.log("LLMNode State: ", state);

}

const graph = new StateGraph(
  z.object({
    messages: z.array()
  }))
  .addNode("LLMNode", LLMNode)
  .addEdge(START, "LLMNode")
  .addEdge("LLMNode", END)
  .compile()