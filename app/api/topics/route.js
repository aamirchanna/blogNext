import connectMongodb from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topics"; // Ensure the correct path to your model

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await connectMongodb();
        await Topic.create({ title, description });
        return NextResponse.json({ message: "Topic created" }, { status: 200 });
    } catch (error) {
        console.error("Error creating topic:", error);
        return NextResponse.json({ message: "Failed to create topic" }, { status: 500 });
    }
}
