import { Suspense } from "react";

import ReviewPreview from "@/components/reviews/ReviewPreview";
import fetchAllReviews from "@/lib/fetch_reviews";

import "@/app/styles/reviews/reviews.css";

export const metadata = {
    title: "Reviews - SeanNodis' Food Joints",
    description: "All reviews",
};

const ReviewsElement = async () => {
    const allReviews = await fetchAllReviews();

    return (
        <>
            {allReviews.map(
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
};

export default function Reviews() {
    return (
        <main>
            <h1 className="center">Latest Reviews</h1>
            <Suspense fallback={<p>Loading</p>}>
                <ReviewsElement />
            </Suspense>
        </main>
    );
}
