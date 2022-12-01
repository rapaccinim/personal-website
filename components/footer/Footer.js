import Wrapper from "../wrapper/Wrapper";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer
            className={styles.footer}
        >
            <Wrapper>
                <div
                    className={styles.footerMessage}
                >
                    🍪 This is a cookie-free website!
                </div>
            </Wrapper>
        </footer>
    )
}
export default Footer;
