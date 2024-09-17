"use client";

import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";
type ActionReturn = {
  errors: string[];
};

export default function PostForm({
  action,
}: {
  action: (
    previos: { errors: string[] },
    formData: FormData
  ) => Promise<ActionReturn>;
}) {
  const [state, handleForm] = useFormState(action, { errors: [] });

  return (
    <>
      <h1>Create a new post</h1>
      <form action={handleForm}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors?.map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
      </form>
    </>
  );
}
