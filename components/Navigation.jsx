"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

function Navigation() {
    const pathname = usePathname();
    return (
        <ul className={styles.nav_ul}>
            <li>
                <Link
                    className={pathname === "/about" ? styles.active : styles.nav_li}
                    href='/about'
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    className={pathname === "/projects" ? styles.active : styles.nav_li}
                    href='/projects'
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    className={pathname === "/qualification" ? styles.active : styles.nav_li}
                    href='/qualification'
                >
                    Qualifications
                </Link>
            </li>
            <li>
                <Link
                    className={pathname === "/contact" ? styles.active : styles.nav_li}
                    href='/contact'
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;
