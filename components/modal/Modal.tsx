"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function Modal() {
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
            {showModal && <div id="add-review-modal">Test</div>}
        </>
    );
}
