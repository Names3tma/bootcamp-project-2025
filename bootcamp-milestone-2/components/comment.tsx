import React from "react";

// TypeScript type for a single comment
type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// Props for the Comment component
type CommentProps = {
  comment: IComment;
};

// Helper function to format the date/time nicely
function parseCommentTime(time: Date): string {
  // Convert to a readable format like "September 16 2024 8:30AM"
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

// The Comment component
export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}
