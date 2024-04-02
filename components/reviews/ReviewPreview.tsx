import { Button } from "@mui/material";
import Link from "next/link";

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
        <div>
            <h1>{title ? title : "Review Title"}</h1>
            <p>
                {intro
                    ? intro
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
                enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                nisi ut aliquip ex ea commodo consequat."}
            </p>
            <Button variant="outlined" className="small-text-button">
                <Link href={`/reviews/${slug}`} className="button-link">
                    Check it out
                </Link>
            </Button>
            <Button variant="outlined" className="small-text-button">
                <Link href={`/reviews/${slug}/social`} className="button-link">
                    Share it
                </Link>
            </Button>
            <Button variant="outlined" className="small-text-button">
                <Link href={`/reviews/${slug}/delete`} className="button-link">
                    Delete
                </Link>
            </Button>
        </div>
    );
};

export default ReviewPreview;
