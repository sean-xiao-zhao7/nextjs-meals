import MyImagePicker from "@/components/image-picker/MyImagePicker";
import { submitNewReviewHandler } from "@/lib/add_review";

export default async function AddReview({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <main>
            <h1>Adding a new review.</h1>
            <div>
                <form action={submitNewReviewHandler}>
                    <MyImagePicker />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}
