import styles from '../styles/home.module.css'
import HeadSEO from "../components/head-seo";

const Home = () => {

    const seoData = {
        title: "Home",
        description: "Marco Rapaccini - Web & Product Development for your idea",
        pageURL: "home"
    }

  const linksList = [
      {
          href: 'blog',
          title: '✍️ Blog',
          description: 'Read my latest blog articles about life, code and other stuff',
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
        <p
            className={styles.description}
        >
          ✨ I transform a vision into human-friendly, working technology
        </p>
        <p
            className={styles.description}
        >
          🌲 This is a minimalist website with low impact on the environment
        </p>
        <p
            className={styles.description}
        >
            👇 <b>Scroll down</b> and explore <i>my world</i>
        </p>
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
      </>
  )
}
export default Home