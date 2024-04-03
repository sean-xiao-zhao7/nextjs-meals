"use server";

import ReviewType from "@/types/reviewType";
import { addReviewDB } from "@/db/reviews/add_review";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const submitNewReviewHandler = async (prevState: any, formData: any) => {
    const newReview: ReviewType = {
        title: formData.get("title"),
        description: formData.get("description"),
        joint_name: formData.get("joint_name"),
        slug: formData.get("slug"),
        image: formData.get("image"),
    };

    if (newReview.title === "") {
        return {
            message: "Title is required.",
        };
    }

    try {
        await addReviewDB(newReview);
    } catch (e: any) {
        console.log(e.message);
    }
    revalidatePath("/reviews");
    redirect("/reviews");
};
