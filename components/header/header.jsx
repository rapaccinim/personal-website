import styles from './header.module.css';
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image
                    src="/marco-rapaccini-web-product-developer-logo.jpg"
                    alt="Marco Rapaccini - Web and Product Developer logo"
                    width={301}
                    height={127}
                />
            </div>
            <div className={styles.header__mainNav}>
                <nav>
                    <ul>
                        <li><a href="#about" target="_self" rel="canonical">About</a></li>
                        <li><a href="#work" target="_self" rel="canonical">Work</a></li>
                        <li><a href="#contact" target="_self" rel="canonical">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.header__socialIcons}>
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
        </header>)
}
