import Link from "next/link";
import Image from "next/image";
import {generateUUID} from "../../utils/utils";
import styles from "./Header.module.css"

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
        <header
            className={styles.header}
        >
            <div
                className={styles.headerWrapper}
            >
                <div
                    className={styles.headerLogo}
                >
                    <Link
                        href="/"
                        aria-label="Home"
                        passHref
                    >
                        <div
                            className={styles.logoWrapper}
                        >
                            <Image
                                src="/marco-rapaccini-web-product-development-header-logo.webp"
                                width="40px"
                                height="40px"
                                alt="Marco Rapaccini Web Product Development Header Logo"
                            />
                        </div>
                    </Link>
                </div>
                <nav
                    className={styles.nav}
                >
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