"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const path = usePathname();

    return (
        <menu>
            <li>
                <Link
                    href={"/reviews"}
                    className={path.startsWith("/reviews") ? "active" : ""}
                >
                    Reviews
                </Link>
            </li>
            <li>
                <Link
                    href={"/locations"}
                    className={path.startsWith("/locations") ? "active" : ""}
                >
                    Locations
                </Link>
            </li>
            <li>
                <Link
                    href={"/social"}
                    className={path.startsWith("/social") ? "active" : ""}
                >
                    Social
                </Link>
            </li>
            <li>
                <Link
                    href={"/gallery"}
                    className={path.startsWith("/gallery") ? "active" : ""}
                >
                    Gallery
                </Link>
            </li>
        </menu>
    );
}
