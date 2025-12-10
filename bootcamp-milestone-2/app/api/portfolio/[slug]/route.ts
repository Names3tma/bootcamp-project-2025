import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const project = await Project.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();

    // Validate the body
    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    const project = await Project.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).orFail();

    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Project not found or failed to add comment" },
      { status: 404 }
    );
  }
}
