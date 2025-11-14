import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";

// Pass your props into the component here
export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`} className={style.blogPost}>
      <Image src={image} alt={imageAlt} width={200} height={200} />
      <div className={style.blogContent}>
        <h2>{title}</h2>
        <p className={style.blogDate}>{date}</p>
        <p className={style.blogDescription}>{description}</p>
      </div>
    </Link>
  );
}
