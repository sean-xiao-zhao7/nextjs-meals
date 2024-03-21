const ReviewPreview = ({ title, intro }: { title: string; intro: string }) => {
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
        </div>
    );
};

export default ReviewPreview;
