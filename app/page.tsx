import ImageSlideShow from "@/components/slideshow/image-slideshow";
import Reviews from "./reviews/page";
import "@/app/styles/home/home.css";

export default function App() {
    return (
        <main>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div id="home-page-intro">
                    <h1>Welcome Foodies!</h1>
                    <p>
                        This is Seannodis&apos; restaurants review site. You can
                        find GTA food locations honest reviews.
                    </p>
                    <p>
                        Welcome to detailed descriptions of food, experiences,
                        locations, etc. This blog started out on Google Maps,
                        and covers many aspects of food joints in the GTA.
                    </p>
                    <p>
                        Each review is ranked by 5 stars, of food, ambiance, and
                        service, just like Google reviews.
                    </p>
                    <p>
                        You can find main dish, dessert, ethnic foods, various.
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
