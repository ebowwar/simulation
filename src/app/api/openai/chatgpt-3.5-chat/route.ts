import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
const openai = new OpenAI({
  apiKey: 'your_api_key_here',
  //apiKey: process.env.OPENAI_API_KEY,

});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}