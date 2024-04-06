import ReviewPreview from "@/components/reviews/ReviewPreview";
import fetchAllReviews from "@/lib/fetch_reviews";
import { Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
    title: "Reviews - SeanNodis' Food Joints",
    description: "All reviews",
};

const ReviewsElement = async () => {
    const allReviews = await fetchAllReviews();

    return (
        <>
            <Button variant="outlined" className="small-text-button">
                <Link href="/reviews/add">Add Review</Link>
            </Button>
            <Button variant="outlined" className="small-text-button">
                Modal
            </Button>
            <div id="add-review-modal">Test</div>
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
