import Link from "next/link";

function Navigation() {
    return (
        <ul>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/projects'>Projects</Link>
            </li>
            <li>
                <Link href='/qualification'>Qualification</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    );
}

export default Navigation;
