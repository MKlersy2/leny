import Head from "next/head";
import styles from '../../styles/Home.module.css';
import Script from '../appScripts'
import MouseFollow from '../../components/mouseFollow.js'


export default function Template() {
    return(

        <div className={styles.container}>
            <Head>
                <title>Notre équipe - Leny</title>
                <meta name="description" content="L&apos;équipe de Leny agrégateur d&apos;annonces immobilières en marque blanche" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MouseFollow></MouseFollow>
            <Script>
                <main className={styles.main}>
                    <div>

                    </div>
                </main>
            </Script>
        </div>

    );
}