import { ChatGroq } from "@langchain/groq";
import dotenv from 'dotenv'
dotenv.config();


const model = new ChatGroq({

    model:"openai/gpt-oss-120b",
    apiKey:process.env.GROQ_API
})

const respo = await model.invoke("hello, how are u")
console.log(respo);
