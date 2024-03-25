import ReviewPreview from "@/components/reviews/ReviewPreview";
import fetchAllReviews from "@/lib/fetch_reviews";
export default function Reviews() {
    const allReviews = fetchAllReviews();
    return (
        <main>
            <h1>Reviews</h1>
            {allReviews.map(
                (review: {
                    title: string;
                    description: string;
                    joint_name: string;
                    slug: string;
                }) => (
                    <ReviewPreview
                        title={review.title}
                        intro={review.description}
                        slug={review.slug}
                    />
                )
            )}
        </main>
    );
}
