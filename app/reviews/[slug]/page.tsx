import SingleReviewDetails from "@/components/reviews/SingleReviewDetails";

export default function ShareSlug({ params }: { params: { slug: string } }) {
    return (
        <main>
            <h1>Review: </h1>
            <SingleReviewDetails slug={params.slug} />
        </main>
    );
}
