import ReviewPreview from "@/components/reviews/ReviewPreview";
import fetchAllReviews from "@/lib/fetch_reviews";
import { Suspense } from "react";

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
            <h1>Reviews</h1>
            <p>Here are all reviews. </p>
            <Suspense fallback={<p>Loading</p>}>
                <ReviewsElement />
            </Suspense>
        </main>
    );
}
