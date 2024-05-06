import { Suspense } from "react";

import fetchAllReviews from "@/lib/fetch_reviews";

import "@/app/styles/reviews/reviews.css";
import ClientReviews from "@/components/reviews/ClientReviews";

export const metadata = {
    title: "Reviews - SeanNodis' Food Joints",
    description: "All reviews",
};

const ReviewsElement = async () => {
    const allReviews = await fetchAllReviews();

    return <ClientReviews reviews={allReviews} />;
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
