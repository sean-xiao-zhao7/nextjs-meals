import ImageSlideShow from "@/components/slideshow/image-slideshow";
import Reviews from "./reviews/page";

export default function App() {
    return (
        <main>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h1>Welcome Foodies!</h1>
                    <p>
                        This is Seannodis&apos; restaurants review site. You can
                        find GTA food locations honest reviews.
                    </p>
                    <p>
                        The latest reviews are below, check Reviews on top to
                        see all.
                    </p>
                </div>
                <ImageSlideShow />
            </div>
            <Reviews />
        </main>
    );
}
