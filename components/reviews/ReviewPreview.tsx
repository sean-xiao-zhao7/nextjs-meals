import { Button } from "@mui/material";
import Link from "next/link";

import "@/app/styles/reviews/review-preview.css";

const ReviewPreview = ({
    title,
    intro,
    slug,
}: {
    title: string;
    intro: string;
    slug: string;
}) => {
    return (
        <div className="review-preview">
            <h1>{title ? title : "Review Title"}</h1>
            <p>
                {intro
                    ? intro
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
                enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                nisi ut aliquip ex ea commodo consequat."}
            </p>
            <div className="buttons-horizontal-container">
                <Button variant="contained" className="small-text-button">
                    <Link href={`/reviews/${slug}`} className="button-link">
                        Check it out
                    </Link>
                </Button>
                <Button variant="contained" className="small-text-button">
                    <Link
                        href={`/reviews/${slug}/social`}
                        className="button-link"
                    >
                        Share it
                    </Link>
                </Button>
                {/* <Button variant="outlined" className="small-text-button">
                <Link href={`/reviews/${slug}/delete`} className="button-link">
                    Delete
                </Link>
            </Button> */}
            </div>
        </div>
    );
};

export default ReviewPreview;
