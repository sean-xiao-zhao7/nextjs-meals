"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
            <motion.div
                className="menu-title-container"
                onViewportLeave={showFixedMenu}
                onViewportEnter={hideFixedMenu}
                key={"menu-title-container"}
            >
                <div className="main-logo-container">
                    <Link href="/" className="main-logo-link-container">
                        <Image
                            src={mainLogo}
                            alt="Main logo"
                            className="menu-logo"
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
                    className="menu-container fixed"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    key={"menu-title-container-fixed"}
                >
                    <div className="menu-title-container">
                        <div className="main-logo-container">
                            <Link href="/" className="main-logo-link-container">
                                <Image
                                    src={mainLogo}
                                    alt="Main logo"
                                    className="menu-logo"
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
        </AnimatePresence>
    );
}
