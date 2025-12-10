import React from "react";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date): string {
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

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}
