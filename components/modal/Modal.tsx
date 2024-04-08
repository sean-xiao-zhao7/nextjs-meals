"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function Modal({ children }: { children: any }) {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal((currentVal) => !currentVal);
    };

    return (
        <>
            <Button
                variant="outlined"
                className="small-text-button"
                onClick={showModalHandler}
            >
                Modal
            </Button>
            <div
                id="add-review-modal"
                className={
                    "modal " + (showModal ? "modal-fade-in" : "modal-fade-out")
                }
            >
                {children ? children : "Test"}
            </div>
        </>
    );
}
