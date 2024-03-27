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
                    href={"/social"}
                    className={path.startsWith("/social") ? "active" : ""}
                >
                    Social
                </Link>
            </li>
        </menu>
    );
}
