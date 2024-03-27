"use client";

import { colors } from "@/app/styles/colors/colors";
import Image from "next/image";
import { useState } from "react";

const MyImagePicker = () => {
    const [imagePath, setImagePath] = useState<string>("");

    return (
        <>
            <div
                style={{
                    borderColor: "black",
                    borderRadius: 5,
                    backgroundColor: colors.mainColor,
                    padding: "1rem",
                }}
            >
                <input
                    type="file"
                    id="image-path"
                    name="image-path"
                    accept="image/png, image/jpeg"
                    onChange={(e: any) => {
                        const file = e.target.files[0];
                        if (file) {
                            const fr = new FileReader();
                            fr.onload = () => {
                                setImagePath(fr.result as string);
                            };
                            fr.readAsDataURL(file);
                        }
                    }}
                />
            </div>
            {imagePath ? (
                <div
                    style={{
                        width: "300px",
                        height: "300px",
                        position: "relative",
                        objectFit: "cover",
                    }}
                >
                    <Image src={imagePath} alt="User picked image." />
                </div>
            ) : null}
        </>
    );
};

export default MyImagePicker;
