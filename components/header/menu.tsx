"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// images
import mainLogo from "@/assets/logo_sean.png";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu({ fixed }: { fixed?: boolean }) {
    const path = usePathname();
    const [menuFixed, setMenuFixed] = useState(false);

    const showFixedMenu = () => {
        setMenuFixed(true);
    };

    const hideFixedMenu = () => {
        setMenuFixed(false);
    };

    return (
        <motion.div
            onViewportLeave={showFixedMenu}
            onViewportEnter={hideFixedMenu}
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

                <menu>
                    <li>
                        <Link
                            href={"/reviews"}
                            className={
                                path.startsWith("/reviews") ? "active" : ""
                            }
                        >
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/locations"}
                            className={
                                path.startsWith("/locations") ? "active" : ""
                            }
                        >
                            Locations
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/social"}
                            className={
                                path.startsWith("/social") ? "active" : ""
                            }
                        >
                            Social
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/gallery"}
                            className={
                                path.startsWith("/gallery") ? "active" : ""
                            }
                        >
                            Gallery
                        </Link>
                    </li>
                </menu>
            </div>
            {fixed && menuFixed && (
                <motion.div
                    id="menu-container"
                    className="fixed"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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

                        <menu>
                            <li>
                                <Link
                                    href={"/reviews"}
                                    className={
                                        path.startsWith("/reviews")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/locations"}
                                    className={
                                        path.startsWith("/locations")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/social"}
                                    className={
                                        path.startsWith("/social")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Social
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/gallery"}
                                    className={
                                        path.startsWith("/gallery")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Gallery
                                </Link>
                            </li>
                        </menu>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
