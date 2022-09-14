import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marco Rapaccini - Web &amp; Product Development</title>
        <meta name="description" content="Marco Rapaccini - Web and Product Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src="/marco-rapaccini-web-product-developer-logo.jpg" alt="Marco Rapaccini - Web and Product Development logo" width={301} height={127} />
        <h1 className={styles.title}>
          Marco Rapaccini
          <br/>
          Web &amp; Product Development
        </h1>
        <p className={styles.description}>
          ✨ I transform a vision into human-friendly, working technology
        </p>
        <p className={styles.description}>
          🌲 This is a minimalistic website that has a low impact on the environment
        </p>
        <p className={styles.description}>
        📥 <b>Connect with me</b>, have a look at the following links 👇
        </p>
        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/marco-rapaccini/?locale=en_US" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🔗 LinkedIn &rarr;</h2>
            <p>Join my professional network and learn something new everyday</p>
          </a>
          <a href="https://twitter.com/@rapaccinim" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🐦 Twitter &rarr;</h2>
            <p>Follow me to be updated on latest development trends and tricks</p>
          </a>
          <a
            href="https://rapaccinim.medium.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>✍️ Medium &rarr;</h2>
            <p>Read my latest blog articles about software engineering, startup and team work on Medium</p>
          </a>
          <a href="https://github.com/rapaccinim" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🐈 GitHub &rarr;</h2>
            <p>
              Explore my code repos: some are interesting, some are boring. But, hey, it compiles!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
            href="https://www.google.co.uk/maps/place/New+Inn+Yard,+Kendal/@54.3255514,-2.748753,19.81z/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Office
        </a>
      </footer>
    </div>
  )
}

export default Home