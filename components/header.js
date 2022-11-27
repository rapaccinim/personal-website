import Link from "next/link";
import Image from "next/image";
import {generateUUID} from "../utils/utils";

const Header = () => {

    const headerLinksLists = [
        {
            href: '/',
            title: 'Home',
            ariaLabel: 'Go to the homepage',
        },
        {
            href: '/blog',
            title: 'Blog',
            ariaLabel: 'Read my blog',
        },
        {
            href: 'https://github.com/rapaccinim/rapaccinim#marco-rapaccini',
            title: 'CV',
            ariaLabel: 'Read my CV on GitHub',
        }
    ];

    return(
        <header>
            <div
                className={"wrapper"}
            >
                <div
                    className={"header-logo"}
                >
                    <Link
                        href="/"
                        aria-label="Home"
                    >
                        <Image
                            src="/marco-rapaccini-web-product-development-header-logo.webp"
                            width="40px"
                            height="40px"
                            alt="Marco Rapaccini Web Product Development Header Logo"
                        />
                    </Link>
                </div>
                <nav>
                    {
                        headerLinksLists.map( link  =>
                            <Link
                                key={generateUUID()}
                                href={link.href}
                                aria-label={link.ariaLabel}
                            >
                                {link.title}
                            </Link>
                        )
                    }
                </nav>
            </div>
        </header>
    )
}
export default Header;