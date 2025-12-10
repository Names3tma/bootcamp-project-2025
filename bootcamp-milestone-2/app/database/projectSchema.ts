import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type Project = {
  title: string;
  description: string;
  details: string[];
  slug: string;
  comments: IComment[];
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: [String], required: true },
  slug: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true, default: new Date() },
    },
  ],
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
