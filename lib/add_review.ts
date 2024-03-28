"use server";

import ReviewType from "@/types/reviewType";

export const submitNewReviewHandler = async (formData: any) => {
    "use server";

    const newReview: ReviewType = {
        title: formData,
        description: "",
        joint_name: "",
        slug: "",
    };
};
