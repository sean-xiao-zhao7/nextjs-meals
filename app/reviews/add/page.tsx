"use client";
import MyImagePicker from "@/components/image-picker/MyImagePicker";
import { submitNewReviewHandler } from "@/lib/add_review";
import { useFormState } from "react-dom";

export default async function AddReview() {
    const [formState, formAction] = useFormState(submitNewReviewHandler, {
        message: "",
    });

    return (
        <main>
            <h1>Adding a new review.</h1>
            <div>
                <form action={formAction}>
                    {formState.message && <p>{formState.message}</p>}
                    Name
                    <br />
                    <input type="text" name="title" id="name" required />
                    <br />
                    Description
                    <br />
                    <input
                        type="text"
                        name="description"
                        id="description"
                        required
                    />
                    <br />
                    Joint Name
                    <br />
                    <input
                        type="text"
                        name="joint_name"
                        id="joint_name"
                        required
                    />
                    <br />
                    Slug
                    <br />
                    <input type="text" name="slug" id="slug" required />
                    <MyImagePicker />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}
