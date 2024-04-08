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
                id="modal-background"
                className={showModal ? "modal-fade-in" : "modal-fade-out"}
            >
                <div id="add-review-modal" className="modal">
                    {children ? children : "Test"}
                </div>
            </div>
        </>
    );
}
