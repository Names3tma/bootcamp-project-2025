import mongoose, { Schema } from "mongoose";

export type Project = {
  title: string;
  description: string;
  details: string[];
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: [String], required: true },
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
