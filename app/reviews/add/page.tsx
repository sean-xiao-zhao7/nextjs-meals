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
                    Name
                    <br />
                    <input type="text" name="title" id="name" />
                    <br />
                    Description
                    <br />
                    <input type="text" name="description" id="description" />
                    <br />
                    Joint Name
                    <br />
                    <input type="text" name="joint_name" id="joint_name" />
                    <br />
                    Slug
                    <br />
                    <input type="text" name="slug" id="slug" />
                    <MyImagePicker />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}
