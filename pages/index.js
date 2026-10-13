import styles from '../styles/Home.module.css'
import HeadSEO from "../components/head-seo";
import Image from "next/image";

const Home = () => {

    const seoData = {
        title: "Home",
        description: "Marco Rapaccini previously traded as a contract engineer in the UK and now runs his own business, Fulginium",
        pageURL: "home",
    };

    return (
        <>
            <HeadSEO
                seoData={seoData}
            />
            <h1
                className={styles.title}
            >
                Marco Rapaccini
            </h1>
            <div
                className={styles.centralPic}
            >
                <Image
                    src="/marco-rapaccini-profile-picture-web-product-development.webp"
                    alt="Marco Rapaccini - Profile Picture"
                    width={150}
                    height={150}
                />
            </div>
            <p
                className={styles.message}
            >
                This is a very old website I used when I was trading as a contract engineer in the UK.
                <br/>
                Now I have my own business: Fulginium.
            </p>
            <div
                className={styles.centralPic}
            >
                <a
                    href="https://fulginium.com"
                    className={styles.button}
                >
                    Visit Fulginium &rarr;
                </a>
            </div>
        </>
    )
}
export default Home;
