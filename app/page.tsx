import { Suspense } from "react";

import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { IPost } from "@/types/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Posts",
  description: "Browse ours latest posts",
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts as IPost[]} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
