import PostForm from "@/components/form/post-form";
import { createPost } from "@/lib/actions/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Post",
  description: "Add your post.",
};

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
