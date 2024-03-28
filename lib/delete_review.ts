"use server";

import { deleteReviewDB } from "@/db/reviews/delete_review";

export const deleteReviewHandler = async (formData: any) => {
    "use server";

    try {
        return deleteReviewDB(formData.get("slug"));
    } catch (e: any) {
        console.log(e.message);
    }
};
