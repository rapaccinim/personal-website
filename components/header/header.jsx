import styles from './header.module.css';
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src="/marco-rapaccini-web-product-developer-logo.jpg"
                alt="Marco Rapaccini - Web and Product Developer logo"
                width={301}
                height={127}
            />
            <div>
                <a href="#about" target="_self" rel="canonical">About</a>
                <a href="#work" target="_self" rel="canonical">Work</a>
                <a href="#contact" target="_self" rel="canonical">Contact</a>
            </div>
            <div>
                <LinkedInIcon/>
                <GitHubIcon/>

            </div>
        </div>)
}
