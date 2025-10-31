import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
  return (
    <>
      <main>
        <h1 className="page-title">Blog</h1>
        <div id="blog-container">
          {blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              date={blog.date}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
