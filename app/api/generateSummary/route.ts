import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {todos} = await request.json()
    console.log('todos', todos)

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo', 
        temperature: 0.8, 
        n: 1, 
        stream: false,
        messages: [
            {
                role: 'system', 
                content: `When responding, welcome the user always as Mr. Casanova and say welcome to the Best Trello App! 
                limit the response to 200 Characters` 
            }, 
            {
                role: 'user', 
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in prograss and doesNotMatch, then tell the user to have a productive day! Here is the data: ${JSON.stringify(todos)}`
            },
        ]
    })
    const {data} = response
    console.log('data', data)
    return NextResponse.json(data.choices[0].message)
}

