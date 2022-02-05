import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import headStyle from '../../styles/components/landing.module.css'
import Image from 'next/image'
import Script from '../appScripts'
import MouseFollow from '../../components/mouseFollow.js'
import effectStyles from '../../styles/effect.module.css'
import Link from 'next/link'


export default function ProfileBuilder() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Leny agrégateur d&apos;annonces immobilières</title>
                <meta name="description" content="Leny agrégateur d&apos;annonces immobilières en marque blanche" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <MouseFollow></MouseFollow>
                    <Script>
                        <div className={`${styles.positionRelative} ${headStyle.triggerCarousel3} ${styles.colorBlack} ${styles.backgroundWhite}`}>
                            <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.marge}`}>
                                <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>P</span>aiement</h3>
                                <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Redirection vers notre prestataire Stripe afin de procéder au paiement.</p>
                                <Link href={`https://api.vendmy.com/leny/stripe/create-checkout-session.php?url=${process.env.HOSTNAME}`}>
                                    <div className={styles.button}>Souscrire à l&apos;offre</div>
                                </Link>
                            </div>
                        </div>
                    </Script>
            </main>
        </div>
    )
}