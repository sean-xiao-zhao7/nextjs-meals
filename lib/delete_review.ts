"use server";

import { deleteReviewDB } from "@/db/reviews/add_review";

export const deleteReviewHandler = async (slug: string) => {
    "use server";

    try {
        return deleteReviewDB(slug);
    } catch (e: any) {
        console.log(e.message);
    }
};
