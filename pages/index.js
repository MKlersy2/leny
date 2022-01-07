import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import headStyle from '../styles/components/landing.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leny agrégateur d'annonces immobilières</title>
        <meta name="description" content="Leny agrégateur d'annonces immobilières en marque blanche" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={headStyle.global}>
          <h1 className={styles.title}>Leny agrégateur</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
