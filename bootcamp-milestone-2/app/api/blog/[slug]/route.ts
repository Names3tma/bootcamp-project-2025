import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";

/* IParams is a TypeScript type definition that describes the structure of the second
   argument that Next.js passes to our API route handler.

   Without IParams:
   - TypeScript wouldn't know what properties the second argument contains
   - We'd lose autocomplete and type checking
   - Typos like { slug } vs { slg } wouldn't be caught until runtime

   With IParams:
   - TypeScript knows the second argument has a "params" object
   - TypeScript knows "params" contains a "slug" property that's a string
   - We get autocomplete when typing { params } and { slug }
   - TypeScript catches errors if we try to access non-existent properties

   Note: IParams doesn't control what Next.js creates - it just tells TypeScript
   what to expect. The actual object structure is determined by our file path:
   /api/blog/[slug]/route.ts creates { params: { slug: "actual-slug-value" } }
*/
type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

/*
	The function below and the functions you create inside route.ts files are called
	"API route handlers" 
	
	Next.js automatically passes two arguments to API route handlers:
		1. First argument: NextRequest - The incoming HTTP request object
		2. Second argument: NextJS Object - Contains route information and other metadata
				There is ALWAYS a "params" object here but the object within is based on our
				api path naming which in this case is "slug"
	We need to include req, even though we don't use it here, so that we can access
	the second argument
*/
export async function GET(req: NextRequest, { params }: IParams) {
  // If { params } looks confusing, check the note below this code block

  await connectDB(); // function from db.ts before
  const { slug } = await params; // await params before destructuring

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params; // await params before destructuring

  try {
    const body = await req.json();

    // Validate the body
    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    // Create comment object with current timestamp
    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    // Find blog and push the new comment to its comments array
    const blog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).orFail();

    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Blog not found or failed to add comment" },
      { status: 404 }
    );
  }
}
