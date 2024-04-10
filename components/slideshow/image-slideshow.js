"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// static images
import img1 from "@/assets/reviews/eggsmart0.jpeg";
import img2 from "@/assets/reviews/harvey0.jpg";
import img3 from "@/assets/reviews/ihop0.jpeg";
import img4 from "@/assets/reviews/manpuku.jpg";
import img5 from "@/assets/reviews/peter0.jpg";
import img6 from "@/assets/reviews/phongocven0.jpeg";
import img7 from "@/assets/reviews/phongocven1.jpeg";

import classes from "./image-slideshow.module.css";

const images = [
    { image: img1, alt: "A delicious, juicy burger" },
    { image: img2, alt: "A delicious, spicy curry" },
    { image: img3, alt: "Steamed dumplings" },
    { image: img4, alt: "Mac and cheese" },
    { image: img7, alt: "A delicious pizza" },
    { image: img5, alt: "A delicious schnitzel" },
    { image: img6, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    className={
                        index === currentImageIndex ? classes.active : ""
                    }
                    alt={image.alt}
                />
            ))}
        </div>
    );
}
