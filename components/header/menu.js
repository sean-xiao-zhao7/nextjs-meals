"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const path = usePathname();

    return (
        <menu>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link
                    href={"/reviews"}
                    className={path.startsWith("reviews") ? "active" : ""}
                >
                    Reviews
                </Link>
            </li>
            <li>
                <Link
                    href={"/share"}
                    className={path.startsWith("share") ? "active" : ""}
                >
                    Share
                </Link>
            </li>
        </menu>
    );
}
