"use client";

import MyButton from "@/components/button/MyButton";
import { deleteReviewBySlugHandler } from "@/lib/delete_review";

const DeleteReviewBySlug = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <MyButton
                text="Delete this review."
                onClick={() =>
                    deleteReviewBySlugHandler(decodeURI(params.slug))
                }
            />
        </>
    );
};

export default DeleteReviewBySlug;
