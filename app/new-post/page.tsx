import PostForm from "@/components/form/post-form";
import { createPost } from "@/lib/actions/posts";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
