import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/Home.module.css';
import Script from '../appScripts'
import MouseFollow from '../../components/mouseFollow.js'
import Header from '/components/header/navbar';
import equipe from '../../styles/components/equipe.module.css';
import effectStyles from '../../styles/effect.module.css';
import headStyle from '../../styles/components/landing.module.css';

export default function Equipe() {
    return(

        <div className={styles.container}>
            <Head>
                <title>Notre équipe - Leny</title>
                <meta name="description" content="L&apos;équipe de Leny agrégateur d&apos;annonces immobilières en marque blanche" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MouseFollow></MouseFollow>
            <Header></Header>
                <Script>
                    <main className={styles.main}>
                        <div className={equipe.presentation}>
                            <div className={`${equipe.subPresentation} ${effectStyles.box} ${headStyle.titleGlobal}`}>
                                <h1 fadein='true' className={`${styles.title} ${effectStyles.fromBottom} ${equipe.titleMarge}`}><span className={styles.lighter}>Votre</span> équipe</h1>
                                <div className={equipe.line}>
                                    <Image
                                        src={'/images/equipe/line.png'}
                                        alt={'Ligne séparatrice'}
                                        width={1051}
                                        height={131.68}
                                    />
                                </div>
                            </div>
                            <div className={equipe.subPresentation}>
                            </div>
                        </div>
                        <div className={`${equipe.shelf} ${headStyle.marge} ${effectStyles.box}`}>
                            <div className={equipe.subShelf}>
                                <div className={equipe.member}>
                                    <div className={equipe.photo}>
                                        <Image
                                            width={147}
                                            height={220}
                                            alt={'Image portrait de loic'}
                                            src={'/images/members/loic.png'}
                                        />
                                    </div>
                                    <div className={equipe.description}>
                                        <h3 className={`${equipe.name}`}>Loic</h3>
                                        <p className={equipe.activity}>Lorem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </Script>
        </div>

    );
}