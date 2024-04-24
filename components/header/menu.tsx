"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// comps
import MenuItems from "./menu-items";

// images
import mainLogo from "@/assets/logo_sean.png";

export default function Menu({ fixed }: { fixed?: boolean }) {
    const [menuFixed, setMenuFixed] = useState(false);

    const showFixedMenu = () => {
        setMenuFixed(true);
    };

    const hideFixedMenu = () => {
        setMenuFixed(false);
    };

    return (
        <>
            <motion.div
                id="menu-title-container"
                onViewportLeave={showFixedMenu}
                onViewportEnter={hideFixedMenu}
            >
                <div id="main-logo-container">
                    <Link href="/" id="main-logo-link-container">
                        <Image
                            src={mainLogo}
                            alt="Main logo"
                            id="menu-logo"
                            fill={true}
                            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
                            priority={true}
                            objectFit="cover"
                        />
                    </Link>
                </div>
                <Link href="/">
                    <h1>SeanNodis&apos; Food Joints</h1>
                </Link>
                <MenuItems />
            </motion.div>
            {fixed && menuFixed && (
                <motion.div
                    id="menu-container"
                    className="fixed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div id="menu-title-container">
                        <div id="main-logo-container">
                            <Link href="/" id="main-logo-link-container">
                                <Image
                                    src={mainLogo}
                                    alt="Main logo"
                                    id="menu-logo"
                                    fill={true}
                                    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
                                    priority={true}
                                />
                            </Link>
                        </div>
                        <Link href="/">
                            <h1>SeanNodis&apos; Food Joints</h1>
                        </Link>

                        <MenuItems />
                    </div>
                </motion.div>
            )}
        </>
    );
}
