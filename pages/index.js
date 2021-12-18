import Head from 'next/head'
import Image from 'next/image'
import {Header} from "../components/header/header";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marco Rapaccini - Web &amp; Product Developer</title>
        <meta name="description" content="Marco Rapaccini - Web and Product Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <main className={styles.main}>
        <Image src="/marco-rapaccini-web-product-developer-logo.jpg" alt="Marco Rapaccini - Web and Product Developer logo" width={301} height={127} />
        <h1 className={styles.title}>
          Marco Rapaccini
          <br/>
          Web &amp; Product Developer
        </h1>

        <p className={styles.description}>
        🚧 I am using  <code className={styles.code}>React</code>, <code className={styles.code}>Next.js</code> and <code className={styles.code}>Material UI</code> to build my new personal website 🚧
        </p>
        <p className={styles.description}>
        📥 In the meantime you can <b>reach out to me</b> at the following links 👇
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
            <p>Read my latest blog articles about web development, startup and team work on Medium</p>
          </a>

          <a href="https://github.com/rapaccinim" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🐈 GitHub &rarr;</h2>
            <p>
              Explore my code repos about React libraries, JavaScript, TypeScript and much more
            </p>
          </a>

          <a href="https://www.marcorapaccini.it" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🍝 Old Italian website &rarr;</h2>
            <p>
              Only if you love pasta but hate spaghetti code, and you can read Italian
            </p>
          </a>

          <a href="https://www.polywork.com/marcorapaccini" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>🤖 Polywork &rarr;</h2>
            <p>
              A new invite-only professional network for people who want to build everyday
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
