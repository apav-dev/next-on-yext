import BlogLayout from "@/components/BlogLayout";
import Container from "@/components/Containter";
import { formatDate } from "@/utils";

import { Blog } from "@/types/autogen";

export async function generateStaticParams() {
  const blogResponse: { response: { docs: Blog[] } } = await fetch(
    `https://cdn.yextapis.com/v2/accounts/me/content/blogs?api_key=${process.env.YEXT_CONTENT_API_KEY}&v=20230701`
  ).then((res) => res.json());

  return blogResponse.response.docs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default async function Blog({ params }: Props) {
  // deduped
  const blogsResponse: { response: { docs: Blog[] } } = await fetch(
    `https://cdn.yextapis.com/v2/accounts/me/content/blogs?api_key=${process.env.YEXT_CONTENT_API_KEY}&v=20230701&slug=${params.slug}`
  ).then((res) => res.json());

  const blog = blogsResponse.response.docs[0];

  return (
    <Container>
      {blog.c_body && (
        <BlogLayout
          title={blog.name}
          date={formatDate(blog.datePosted)}
          content={blog.c_body}
          coverPhoto={blog.c_coverPhoto}
        />
      )}
    </Container>
  );
}