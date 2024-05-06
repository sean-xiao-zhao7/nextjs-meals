"use client";
import { motion } from "framer-motion";

import ReviewPreview from "@/components/reviews/ReviewPreview";

export default function ClientReviews(props: any) {
    return (
        <motion.ul
            id="reviews-list"
            variants={{
                visible: { transition: { staggerChildren: 1 } },
            }}
        >
            {props.reviews.map(
                (review: {
                    title: string;
                    description: string;
                    joint_name: string;
                    slug: string;
                }) => (
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" }}
                        key={review.slug}
                    >
                        <ReviewPreview
                            title={review.title}
                            intro={review.description}
                            slug={review.slug}
                        />
                    </motion.li>
                )
            )}
        </motion.ul>
    );
}
