import MyImagePicker from "@/components/image-picker/MyImagePicker";
import ReviewType from "@/types/reviewType";

export default async function AddReview({
    params,
}: {
    params: { slug: string };
}) {
    const onSubmitHandler = async (formData: any) => {
        "use server";

        const newReview: ReviewType = {
            title: formData,
            description: "",
            joint_name: "",
            slug: "",
        };
    };

    return (
        <main>
            <h1>Adding a new review.</h1>
            <div>
                <form action={onSubmitHandler}>
                    <button type="submit">Upload to server</button>
                    <MyImagePicker />
                </form>
            </div>
        </main>
    );
}
