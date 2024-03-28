import MyImagePicker from "@/components/image-picker/MyImagePicker";
import { fetchOneReviewBySlug } from "@/lib/fetch_reviews";
import { addNewImageHandler } from "@/lib/update_review";
import { notFound } from "next/navigation";

export default async function Social({ params }: { params: { slug: string } }) {
    const review = await fetchOneReviewBySlug(params.slug);
    if (!review) notFound();

    return (
        <main>
            <h1>Here are all the user shares for {review.title}!</h1>
            <div>
                <h2>Add your image to {review.title}</h2>
                <form action={addNewImageHandler}>
                    <button type="submit">Upload to server</button>
                    <MyImagePicker />
                </form>
            </div>
        </main>
    );
}
