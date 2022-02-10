import Head from 'next/head'
import styles from '../styles/Home.module.css'
import headStyle from '../styles/components/landing.module.css'
import AppScript from './appScripts'
import Scroll from './appLaunch'
import Image from 'next/image'
import effectStyles from '../styles/effect.module.css'
import CarouselHorizontal from '../components/carouselHorizontal'
import Carousel from '../components/carousel'
import Diamond from '../components/geodes/diamond'
import MouseFollow from '../components/mouseFollow.js'
import PricingSpecial from '../components/pricing-plan/special'
import PricingNormal from '../components/pricing-plan/normal'
import PricingPro from '../components/pricing-plan/pro'
import pricing from '../styles/components/pricing.module.css';
import {unlock, lock} from './scrollLockScript.js'
import Footer from '../components/footer/footer'

export default function Home() {
  
  return (
    <div className={styles.container}>
        <Head>
          <title>Leny agrégateur d&apos;annonces immobilières</title>
          <meta name="description" content="Leny agrégateur d&apos;annonces immobilières en marque blanche" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <main className={styles.main}>
            <MouseFollow></MouseFollow>
            <AppScript>
              <Scroll>
                <div className={headStyle.global}>
                  <div className={`${styles.positionRelative} ${styles.positionRelativeSize}`}>
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
                      <h1 fadein='true' onClick={lock} className={`${styles.title} ${effectStyles.fromBottom}`}>Leny <span className={styles.lighter}>déniche votre</span></h1>
                    </div>
                    <div className={effectStyles.box}>
                      <h1 fadein='true' onClick={unlock} delay='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>prochain bien</span></h1>
                    </div>
                  </div>
                  <div noclick='true' className={`${headStyle.globalImage}`}>
                    <div noclick='true' parallax='true' style={{width: '330px', height:'600px'}} className={`${headStyle.image}`}>
                      <div className={`${styles.positionRelative} ${styles.positionRelativeSize}`}>
                        <Image   
                        noclick='true'              
                        src="/images/meufchimney.png"
                        priority
                        layout='fill'
                        objectFit='cover'
                        objectPosition='bottom right'
                        className={`${headStyle.triggerHover}`}
                        alt='Photo statut'/>
                        <Image   
                        noclick='true'              
                        src="/images/meufchimneyInvert.jpg"
                        priority
                        layout='fill'
                        objectFit='cover'
                        objectPosition='bottom right'
                        className={`${headStyle.triggerHover} ${headStyle.imageHidden}`}
                        alt='Photo statut'/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${headStyle.subGlobal} ${styles.positionRelative} ${headStyle.triggerCarousel1}`}>
                  <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.margeForImg}`}>
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>A</span>daptable & <span className={`${headStyle.ligature}`}>C</span>ollaboratif</h3>
                    <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Plus qu&apos;un outil, Leny est votre nouvel allié. Une plateforme personnalisable, à votre nom, facilitant la recherche de vos clients. Les annonces de + de 3000 sites immobiliers, regroupées dans un seul et même endroit.</p>
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
                <div className={`${headStyle.triggerCarousel2} ${styles.colorBlack} ${styles.backgroundWhite}`}>
                  <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.marge} ${headStyle.espacement}`}>
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>D</span>es services exceptionnels</h3>
                    <div className={`${styles.positionRelative}`}>
                      <div fadein='true' className={`${styles.geodeBigGlobal} ${effectStyles.fromBottom} ${styles.zIndex0}`}>
                          <div className={`${styles.geodeGlobal}`}>
                            {/* <div className={`${styles.circleGlobal}`}>
                            </div> */}
                              <Diamond></Diamond>
                          </div>
                      </div>
                      <div fadein='true' className={`${styles.zIndex1} ${effectStyles.fromNowhere} ${styles.positionAbsolute}`}>
                        <p className={`${styles.boxParagraphe}`}>Générez des leads d&apos;acheteurs, vendeurs, investisseurs, bailleurs etc., de manière automatisée</p>
                      </div>
                      <div>
                        <p className={`${styles.boxParagraphe} ${styles.invisbleTexte}`}>Boostez et restez proche de vos prospects en proposant la meilleure alerte immobilière, depuis votre site internet ou application mobile.</p>
                      </div>
                    </div>
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
                <div className={`${styles.positionRelative} ${headStyle.triggerCarousel3} ${styles.colorBlack} ${styles.backgroundWhite}`}>
                  <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.marge}`}>
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>D</span>es services exceptionnels</h3>
                    <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Lorem Ipsum is é aaàæsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                  </div>
                </div>
                <div className={`${styles.displayFlex} ${pricing.marginGlobal} ${styles.backgroundWhite}`}>
                  <PricingNormal></PricingNormal>
                  <PricingSpecial></PricingSpecial>
                  <PricingPro></PricingPro>
                </div>
              </Scroll>
            </AppScript>
          </main>
          {/* <Footer></Footer> */}
      </div>
  )
};
