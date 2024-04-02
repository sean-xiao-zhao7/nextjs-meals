"use server";

import ReviewType from "@/types/reviewType";
import { addReviewDB } from "@/db/reviews/add_review";
import { redirect } from "next/navigation";

export const submitNewReviewHandler = async (formData: any) => {
    const newReview: ReviewType = {
        title: formData.get("title"),
        description: formData.get("description"),
        joint_name: formData.get("joint_name"),
        slug: formData.get("slug"),
        image: formData.get("image"),
    };

    try {
        await addReviewDB(newReview);
    } catch (e: any) {
        console.log(e.message);
    }
    redirect("/reviews");
};
