import BlogPreview from "@/components/blogPreview";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";

async function getBlogs() {
  await connectDB(); // Connect to MongoDB first

  try {
    // Query MongoDB for all blogs, sorted by date (newest first)
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // Return the blogs
    return blogs;
  } catch (err) {
    return null; // If error, return null
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
      <main>
        <h1 className="page-title">Blog</h1>
        <div id="blog-container">
          {blogs &&
            blogs.map((blog) => (
              <BlogPreview
                key={blog.slug}
                title={blog.title}
                date={blog.date.toString()}
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
