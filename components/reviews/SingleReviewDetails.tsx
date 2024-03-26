import { fetchOneReviewBySlug } from "@/lib/fetch_reviews";

const SingleReviewDetails = async ({ slug }: { slug: string }) => {
    const review = await fetchOneReviewBySlug(slug);
    return (
        <>
            <h1>{review.title}</h1>
            <p>{review.description}</p>
        </>
    );
};

export default SingleReviewDetails;
