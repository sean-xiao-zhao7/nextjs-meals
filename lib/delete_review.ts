"use server";

import { deleteReviewDB } from "@/db/reviews/delete_review";

export const deleteReviewHandler = async (formData: any) => {
    try {
        return deleteReviewDB(formData.get("slug"));
    } catch (e: any) {
        console.log(e.message);
    }
};

export const deleteReviewBySlugHandler = async (slug: string) => {
    try {
        return deleteReviewDB(slug);
    } catch (e: any) {
        console.log(e.message);
    }
};
