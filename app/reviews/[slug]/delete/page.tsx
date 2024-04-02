import MyButton from "@/components/button/MyButton";
import { deleteReviewBySlugHandler } from "@/lib/delete_review";

const DeleteReviewBySlug = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <MyButton
                text="Delete this review."
                onClick={() => deleteReviewBySlugHandler(params.slug)}
            />
        </>
    );
};

export default DeleteReviewBySlug;
