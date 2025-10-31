export interface Blog {
  // type also works
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    date: "October 13, 2025",
    description:
      "This is my first blog post where I share my thoughts and experiences.",
    image: "/images/blog1.png",
    imageAlt: "First blog post image",
    slug: "my-first-blog-post",
  },
  {
    title: "Learning TypeScript",
    date: "October 14, 2025",
    description:
      "My journey learning TypeScript and building web applications.",
    image: "/images/blog2.png",
    imageAlt: "TypeScript learning image",
    slug: "learning-typescript",
  },
];

export default blogs; // This will allow us to access this data anywhere!
