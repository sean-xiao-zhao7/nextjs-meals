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
            <Link href={`/reviews/${slug}`}>Check it out</Link>
        </div>
    );
};

export default ReviewPreview;
