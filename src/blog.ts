type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    date: "October 13, 2025",
    description:
      "This is my first blog post where I share my thoughts and experiences.",
    image: "./images/blog1.png",
    imageAlt: "First blog post image",
    slug: "my-first-blog-post",
  },
  {
    title: "Learning TypeScript",
    date: "October 14, 2025",
    description:
      "My journey learning TypeScript and building web applications.",
    image: "./images/blog2.png",
    imageAlt: "TypeScript learning image",
    slug: "learning-typescript",
  },
];


function appendBlogsToPage() {

  const blogContainer = document.getElementById("blog-container");


  if (!blogContainer) {
    console.error("Blog container not found");
    return;
  }


  blogs.forEach((blog) => {

    const blogPost = document.createElement("div");
    blogPost.className = "blog-post"; 


    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    blogPost.appendChild(image);

   
    const contentDiv = document.createElement("div");
    contentDiv.className = "blog-content";

  
    const title = document.createElement("h2");
    title.textContent = blog.title;
    contentDiv.appendChild(title);

  
    const date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = blog.date;
    contentDiv.appendChild(date);


    const description = document.createElement("p");
    description.className = "blog-description";
    description.textContent = blog.description;
    contentDiv.appendChild(description);

   
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.textContent = "Read More";
    contentDiv.appendChild(link);

  
    blogPost.appendChild(contentDiv);

  
    blogContainer.appendChild(blogPost);
  });
}


document.addEventListener("DOMContentLoaded", appendBlogsToPage);
