import Link from 'next/link'
import Image from "next/image";
import gif from "/public/404-page-not-found-marco-rapaccini-web-product-development.gif"
import styles from "../styles/404.module.css"

const SeparationTildes = () => <p className={styles.separationTildes}>~ ~ ~</p>;

const Custom404 = () => {
    return(
        <>
            <h1>404 - Page Not Found</h1>
            <div
                className={styles.gif}
            >
                <Image
                    src={gif}
                    alt="404 page not found marco rapaccini web product development"
                    width="640px"
                    height="360px"
                />
            </div>
            <SeparationTildes/>
            <p>
                Here is a rule to remember in future, when anything tempts you to feel bitter: not <i>This is misfortune</i>,
                but <i>To bear this worthily is good fortune</i>.
            </p>
            <p>- Marcus Aurelius</p>
            <SeparationTildes/>
            <Link href="/">
                <a>
                    Come back home, Lassie
                </a>
            </Link>
        </>
    )
}
export default Custom404;