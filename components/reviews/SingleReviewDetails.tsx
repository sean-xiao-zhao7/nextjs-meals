import { fetchOneReviewBySlug } from "@/lib/fetch_reviews";
import { notFound } from "next/navigation";

const SingleReviewDetails = async ({ slug }: { slug: string }) => {
    const review = await fetchOneReviewBySlug(slug);
    if (!review) notFound();

    return (
        <>
            <h1>{review.title}</h1>
            <p>{review.description}</p>
        </>
    );
};

export default SingleReviewDetails;
