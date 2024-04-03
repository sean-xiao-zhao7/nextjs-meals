import ImageSlideShow from "@/components/slideshow/image-slideshow";
import Reviews from "./reviews/page";

export default function App() {
    return (
        <main>
            <h1>Welcome Foodies!</h1>
            <p>
                This is Seannodis&apos; restaurants review site. You can find
                GTA food locations honest reviews.
            </p>
            <p>
                The latest reviews are below, check Reviews on top to see all.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ImageSlideShow />
            </div>
            <Reviews />
        </main>
    );
}
