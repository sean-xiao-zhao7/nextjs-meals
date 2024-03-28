import { deleteReviewHandler } from "@/lib/delete_review";

export default async function DeleteReview() {
    return (
        <main>
            <h1>Delete one review by slug.</h1>
            <div>
                <form action={deleteReviewHandler}>
                    Slug
                    <br />
                    <input type="text" name="slug" id="slug" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}
