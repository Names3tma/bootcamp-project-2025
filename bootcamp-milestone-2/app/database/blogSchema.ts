import mongoose, { Schema } from "mongoose";

// TypeScript type for a single comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for the Blog
export type Blog = {
  title: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  slug: string;
  comments: IComment[];
};

// Mongoose schema for the Blog
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true, default: new Date() },
    },
  ],
});

// Create and export the model
// Check if model already exists to prevent recompilation errors
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
