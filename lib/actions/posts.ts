"use server";

import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "../posts";
import { uploadImage } from "../cloudinary/cloudinary";
import { revalidatePath } from "next/cache";

export async function createPost(
  previous: { errors: string[] },
  formData: FormData
) {
  "use server";
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;
  const errors = [];
  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }
  console.log(image);
  if (image.size === 0) {
    errors.push("Image is required");
  }
  if (errors.length) {
    return { errors };
  }
  let imageUrl = "";
  try {
    imageUrl = await uploadImage(image);
  } catch (err) {
    throw new Error("Couldn't upload the image.");
  }
  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}

export async function togglePostLikeStatus(postId: string) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
