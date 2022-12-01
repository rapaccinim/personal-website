import styles from '../styles/Home.module.css'
import HeadSEO from "../components/head-seo";
import Carbonbadge from "react-carbonbadge"
import {generateUUID} from "../utils/utils";

const Home = () => {

    const seoData = {
        title: "Home",
        description: "Marco Rapaccini - Web & Product Development for your idea",
        pageURL: "home",
    }

    const bulletPoints = [
        '💻 Hi, I am human being working with software since 2016',
        '✨ I transform a vision into human-friendly, working technology',
        '👇 Scroll down and explore my world',
    ];

    const linksList = [
        {
            href: 'blog',
            title: '✍️ Blog',
            description: 'My digital garden with seeds about life, code and other stuff',
            ariaLabel: 'Read my blog articles on this website',
            target: '_self',
        },
        {
            href: 'https://www.linkedin.com/in/marco-rapaccini/?locale=en_US',
            title: '🔗 LinkedIn',
            description: 'Probably the best way to contact me',
            ariaLabel: 'Connect with me on LinkedIn',
        },
        {
            href: 'https://github.com/rapaccinim',
            title: '🐈 GitHub',
            description: 'Hey, it compiles! Wait, why?',
            ariaLabel: 'Connect with me on GitHub',
        },
        {
            href: 'https://rapaccinim.medium.com/',
            title: '📖️ Medium',
            description: 'Read my technical articles on Medium',
            ariaLabel: 'Follow me on Medium',
        },
        {
            href: 'https://twitter.com/@rapaccinim',
            title: '🐦 Twitter',
            description: "I don't have a blue check but I post good content",
            ariaLabel: 'Connect with me on Twitter',
        },
    ];

    return (
        <>
            <HeadSEO
                seoData={seoData}
            />
            <h1
                className={styles.title}
            >
                Marco Rapaccini
                <br/>
                Web &amp; Product Development
            </h1>
            <div>
                {bulletPoints.map( bulletPoint =>
                    <p
                        className={styles.bulletPoint}
                        key={generateUUID(bulletPoint)}
                    >
                        {bulletPoint}
                    </p>
                )}
            </div>
            <div
                className={styles.grid}
            >
                {linksList.map(singleLink =>
                    <a
                        href={singleLink.href}
                        className={styles.card}
                        target={singleLink.target || "_blank"}
                        rel="noopener noreferrer"
                        aria-label={singleLink.ariaLabel}
                        key={singleLink.href}
                    >
                        <h2>{singleLink.title} &rarr;</h2>
                        <p>{singleLink.description}</p>
                    </a>
                )}
            </div>
            <div>
                <p
                    className={styles.bulletPoint}
                >
                    🌲 This is a minimalist website with low impact on the environment
                </p>
                <Carbonbadge
                    darkMode={true}
                />
            </div>
        </>
    )
}
export default Home