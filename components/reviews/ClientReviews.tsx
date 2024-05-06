"use client";

import ReviewPreview from "@/components/reviews/ReviewPreview";

export default function ClientReviews(props: any) {
    return (
        <>
            {props.reviews.map(
                (review: {
                    title: string;
                    description: string;
                    joint_name: string;
                    slug: string;
                }) => (
                    <ReviewPreview
                        key={review.slug}
                        title={review.title}
                        intro={review.description}
                        slug={review.slug}
                    />
                )
            )}
        </>
    );
}
