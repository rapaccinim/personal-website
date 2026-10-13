import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css"

const Header = () => {

    const headerLinksLists = [
        {
            href: '/',
            title: 'Home',
            ariaLabel: 'Go to the homepage',
        },
        {
            href: 'https://fulginium.com',
            title: 'Fulginium',
            ariaLabel: 'Visit the Fulginium website',
        }
    ];

    return (
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
                                width="40"
                                height="40"
                                alt="Marco Rapaccini Header Logo"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                    </Link>
                </div>
                <nav
                    className={styles.nav}
                >
                    {
                        headerLinksLists.map( link  =>
                            <Link
                                key={link.href}
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
    );
}
export default Header;