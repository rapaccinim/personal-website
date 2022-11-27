import styles from "../styles/Home.module.css";

const Footer = () => {

    const footerLinksLists = [
        {
            href: 'https://www.google.co.uk/maps/place/New+Inn+Yard,+Kendal/@54.3255514,-2.748753,19.81z/',
            title: '🏢 Office',
            ariaLabel: 'See where my office is on Google Maps',
        },
        {
            href: 'https://github.com/rapaccinim/rapaccinim#marco-rapaccini',
            title: '💼 My CV',
            ariaLabel: 'Read my CV on GitHub',
        },
    ];

    return (
        <footer
            className={styles.footer}
        >
            {footerLinksLists.map( singleFooterLink =>
                <div
                    key={singleFooterLink.href}
                >
                    <a
                        href={singleFooterLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={singleFooterLink.ariaLabel}
                    >
                        {singleFooterLink.title}
                    </a>
                </div>
            )}
        </footer>
    )

}
export default Footer;
