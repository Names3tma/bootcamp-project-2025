import { notFound } from "next/navigation";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";
import Link from "next/link";
import Comment from "@/components/comment";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  await connectDB();

  try {
    const project = await Project.findOne({ slug }).orFail();
    return project;
  } catch (err) {
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main>
        <article className="project-article">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>

          <h2>Details</h2>
          <ul>
            {project.details.map((detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <h2>Comments</h2>
          {project.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          ))}

          <Link href="/resume" className="back-link">
            ← Back to Resume
          </Link>
        </article>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
