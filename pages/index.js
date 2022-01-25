import Head from 'next/head'
import styles from '../styles/Home.module.css'
import headStyle from '../styles/components/landing.module.css'
import Scroll from './appLaunch'
import Image from 'next/image'
import effectStyles from '../styles/effect.module.css'
import CarouselHorizontal from '../components/carouselHorizontal'
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Leny agrégateur d&apos;annonces immobilières</title>
          <meta name="description" content="Leny agrégateur d'annonces immobilières en marque blanche" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <main className={styles.main}>
            <Scroll>
              <div className={headStyle.global}>
                <div>
                  <Image
                    src="/images/background-line.svg"
                    priority
                    layout='fill'
                    objectFit='cover'
                    alt='Ligne background'
                  />
                </div>
                <div className={headStyle.titleGlobal}>
                  <div className={effectStyles.box}>
                    <h1 fadein='true' className={`${styles.title} ${effectStyles.fromBottom}`}>Leny <span className={styles.lighter}>déniche votre</span></h1>
                  </div>
                  <div className={effectStyles.box}>
                    <h1 fadein='true' delay='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>prochain bien</span></h1>
                  </div>
                </div>
                <div parallax='true' className={headStyle.image}>
                  <Image                 
                  src="/images/boxNature.webp"
                  priority
                  width={330}
                  height={600}
                  alt='Appartement'/>
                </div>
              </div>
              <div className={`${headStyle.subGlobal} ${styles.positionRelative} ${headStyle.triggerCarousel1}`}>
                <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.margeForImg}`}>
                  <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}>Des services exceptionnels</h3>
                  <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Lorem Ipsum is é aaàæsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                </div>
              </div>

              <div className={`${headStyle.bigGlobal} ${headStyle.stepCarousel1}`}>
                <div className={headStyle.global}>
                  <CarouselHorizontal></CarouselHorizontal>
                </div>
                <div className={`${headStyle.step1}`}></div>
                <div className={`${headStyle.step2}`}></div>
                <div className={`${headStyle.step3}`}></div>
              </div>
              <div className={`${styles.positionRelative} ${headStyle.triggerCarousel2} ${styles.colorBlack}`}>
                <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.marge}`}>
                  <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}>Des services exceptionnels</h3>
                  <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Lorem Ipsum is é aaàæsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                </div>
              </div>
              <div className={`${headStyle.bigGlobal} ${headStyle.stepCarousel2}`}>
                <div className={headStyle.global}>
                  <Carousel></Carousel>
                </div>
                <div className={`${headStyle.step1}`}></div>
                <div className={`${headStyle.step2}`}></div>
                <div className={`${headStyle.step3}`}></div>
              </div>
              <div className={`${headStyle.global}`}>
                <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.margeForImg}`}>
                  <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}>Des services exceptionnels</h3>
                </div>
              </div>
            </Scroll>
          </main>

          <footer className={styles.footer}>
            
          </footer>
      </div>
  )
};
