var blogs = [
    {
        title: "My First Blog Post",
        date: "October 13, 2025",
        description: "This is my first blog post where I share my thoughts and experiences.",
        image: "./images/blog1.png",
        imageAlt: "First blog post image",
        slug: "my-first-blog-post",
    },
    {
        title: "Learning TypeScript",
        date: "October 14, 2025",
        description: "My journey learning TypeScript and building web applications.",
        image: "./images/blog2.png",
        imageAlt: "TypeScript learning image",
        slug: "learning-typescript",
    },
];
function appendBlogsToPage() {
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
        console.error("Blog container not found");
        return;
    }
    blogs.forEach(function (blog) {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogPost.appendChild(image);
        var contentDiv = document.createElement("div");
        contentDiv.className = "blog-content";
        var title = document.createElement("h2");
        title.textContent = blog.title;
        contentDiv.appendChild(title);
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        contentDiv.appendChild(date);
        var description = document.createElement("p");
        description.className = "blog-description";
        description.textContent = blog.description;
        contentDiv.appendChild(description);
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        link.textContent = "Read More";
        contentDiv.appendChild(link);
        blogPost.appendChild(contentDiv);
        blogContainer.appendChild(blogPost);
    });
}
document.addEventListener("DOMContentLoaded", appendBlogsToPage);
