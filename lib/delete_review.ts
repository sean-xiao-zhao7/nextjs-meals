"use server";

import { deleteReviewDB } from "@/db/reviews/delete_review";
import { redirect } from "next/navigation";

export const deleteReviewHandler = async (formData: any) => {
    try {
        const result = await deleteReviewDB(formData.get("slug"));
        return result;
    } catch (e: any) {
        console.log(e.message);
    }
};

export const deleteReviewBySlugHandler = async (slug: string) => {
    try {
        await deleteReviewDB(slug);
    } catch (e: any) {
        console.log(e.message);
    }
    redirect("/reviews");
};
