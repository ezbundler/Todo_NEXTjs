import dbConnect from "@/lib/mongodb";
import Task, { ITask } from "@/models/Task";
import { NextResponse } from "next/server";




export async function GET() {
    await dbConnect();

    const tasks = await Task.find();
    return NextResponse.json(tasks);
    
}


export async function POST(request:Request){
    const body:ITask = await request.json();
    await dbConnect();
    const newTask = new Task(body);

    await newTask.save();
    return  NextResponse.json(newTask,{status:201});

}

export async function Delete(request:Request){
    const id = new URL(request.url).searchParams.get('id');
    await dbConnect();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({message: 'Task deleted'});
}


