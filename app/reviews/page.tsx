import { Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";

import Modal from "@/components/modal/Modal";
import ReviewPreview from "@/components/reviews/ReviewPreview";
import fetchAllReviews from "@/lib/fetch_reviews";

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
            <Modal />
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
