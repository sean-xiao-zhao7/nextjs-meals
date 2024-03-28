"use server";

import ReviewType from "@/types/reviewType";
import { addReviewDB } from "@/db/reviews/add_review";

export const submitNewReviewHandler = async (formData: any) => {
    "use server";

    const newReview: ReviewType = {
        title: formData.get("title"),
        description: formData.get("description"),
        joint_name: formData.get("joint_name"),
        slug: formData.get("slug"),
    };

    try {
        return addReviewDB(newReview);
    } catch (e: any) {
        console.log(e.message);
    }
};
