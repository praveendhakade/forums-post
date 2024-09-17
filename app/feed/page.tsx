import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { IPost } from "@/types/post";
import { Metadata } from "next";

// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
// export async function generateMetadata( {params, searchParams}: Props,  parent: ResolvingMetadata): Promise<Metadata> {
export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts(10);
  const numberOfPost = posts.length;
  return {
    title: `Browse all our ${numberOfPost} posts.`,
    description: "Browse all our posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts(10);
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts as IPost[]} />
    </>
  );
}
