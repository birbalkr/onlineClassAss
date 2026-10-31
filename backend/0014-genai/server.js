import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";
import { tool, createAgent, context } from "langchain";

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
  async function () {
    return events;
  },
  {
    name: "getEvents",
    description: "Retrieves all events",
    schema: z.object({}),
  },
);

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API,
});

const agent = createAgent({
  model,
  tool: [createEventTool, getEventsTool],
});

const messages = [];

while (true) {
  const userInput = await readline.question("Enter your input: ");

  const response = await agent.stream({
    messages: [
      {
        role: "user",
        content: userInput,
      },
    ],
  },{streamMode:'messages'});

  for await (const [chunk] of response) {
    process.stdout.write(chunk.content);
  }

  process.stdout.write("\n");
}
