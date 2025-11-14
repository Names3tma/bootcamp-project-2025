import { notFound } from "next/navigation";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <main>
        <article className="blog-article">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-date">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={600}
            height={400}
            className="blog-article-image"
          />
          <div className="blog-content-full">
            {blog.content
              .split("\n")
              .map(
                (paragraph: string, index: number) =>
                  paragraph.trim() && <p key={index}>{paragraph}</p>
              )}
          </div>
          <Link href="/blog" className="back-link">
            ← Back to Blog
          </Link>
        </article>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
