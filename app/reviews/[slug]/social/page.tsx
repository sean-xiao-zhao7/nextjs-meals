import MyImagePicker from "@/components/image-picker/MyImagePicker";

export default function Social({ params }: { params: { slug: string } }) {
    console.log(params);
    return (
        <main>
            <h1>Here are all the user shares for {params.slug}!</h1>
            <div>
                <h2>Add your image to {params.slug}</h2>
                <MyImagePicker />
            </div>
        </main>
    );
}
