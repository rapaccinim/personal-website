import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carbonbadge from "react-carbonbadge"

const Home = () => {

  const linksList = [
    {
      href: 'https://www.linkedin.com/in/marco-rapaccini/?locale=en_US',
      title: '🔗 LinkedIn',
      description: 'Join my professional network and learn something new everyday',
      ariaLabel: 'Connect with me on LinkedIn',
    },
    {
      href: 'https://github.com/rapaccinim',
      title: '🐈 GitHub',
      description: 'Have a look at my code base repos: interesting or boring stuff. But, hey, it compiles!',
      ariaLabel: 'Connect with me on GitHub',
    },
    {
      href: 'https://rapaccinim.medium.com/',
      title: '✍️ Medium',
      description: 'Read my latest blog articles about software engineering on Medium',
      ariaLabel: 'Connect with me on Medium',
    },
    {
      href: 'https://twitter.com/@rapaccinim',
      title: '🐦 Twitter',
      description: 'Follow me to be updated on latest tech trends and random stuff',
      ariaLabel: 'Connect with me on Twitter',
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Marco Rapaccini - Web &amp; Product Development
        </title>
        <meta
            name="description"
            content="Marco Rapaccini - Web and Product Development"
        />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <link
            rel="icon"
            href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <Image
            src="/marco-rapaccini-web-product-developer-logo.jpg"
            alt="Marco Rapaccini - Web and Product Development logo"
            width={301}
            height={127}
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
        <Carbonbadge darkMode={true} />
        <p
            className={styles.description}
        >
          📥 <b>Connect with me</b>, have a look at the following links 👇
        </p>
        <div
          className={styles.grid}
        >
          {linksList.map(singleLink =>
            <a
                href={singleLink.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={singleLink.ariaLabel}
                key={singleLink.href}
            >
              <h2>{singleLink.title} &rarr;</h2>
              <p>{singleLink.description}</p>
            </a>
          )}
        </div>
      </main>
    </div>
  )
}
export default Home