import Head from 'next/head';
import styles from '../styles/Home.module.css';
import headStyle from '../styles/components/landing.module.css';
import AppScript from './appScripts';
import Scroll from './appLaunch';
import Image from 'next/image';
import effectStyles from '../styles/effect.module.css';
import CarouselHorizontal from '../components/carouselHorizontal';
import Carousel from '../components/carousel';
import MouseFollow from '../components/mouseFollow.js';
import PricingSpecial from '../components/pricing-plan/special';
import PricingNormal from '../components/pricing-plan/normal';
import PricingPro from '../components/pricing-plan/pro';
import pricing from '../styles/components/pricing.module.css';
import Footer from '../components/footer/footer';
import carouselHorizontal from '/styles/components/carouselHorizontal.module.css';
import carousel from '/styles/components/carousel.module.css';
import Header from '/components/header/navbar';
import Rectangle from '../components/rectangle/rectangle';
import PricingMobile from '../components/pricing-plan/mobile';


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
            <Header></Header>
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
                    <div parallax='true' parallaxbottom='true' parallaxinit='true'>
                      <div className={effectStyles.box}>
                        <h1 fadein='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>Une nouvelle</span> ère</h1>
                      </div>
                      <div className={effectStyles.box}>
                        <h1 fadein='true' delay='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>de collaboration</span></h1>
                      </div>
                    </div>
                  </div>
                  <div noclick='true' className={`${headStyle.globalImage} ${styles.imagePresentation}`}>
                    <div noclick='true' parallax='true' parallaxtop='true' parallaxinit='true' style={{width: '330px', height:'600px'}} className={`${headStyle.image}`}>
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
                        src="/images/meufchimneyInvert.png"
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
                  <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.margeForImg}`} parallax='true' parallaxinit='false' parallaxbottom='true'>
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>A</span>daptable & <span className={`${headStyle.ligature}`}>C</span>ollaboratif</h3>
                    <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Plus qu&apos;un outil, Leny est votre nouvel allié. Une plateforme personnalisable, à votre nom, facilitant la recherche de vos clients. Les annonces de + de 3000 sites immobiliers, regroupées dans un seul et même endroit.</p>
                  </div>
                </div>

                <div className={`${headStyle.bigGlobal} ${headStyle.stepCarousel1} ${carouselHorizontal.triggerGlobal}`}>
                  <div className={`${headStyle.global} ${carouselHorizontal.gradiant}`}>
                    <CarouselHorizontal></CarouselHorizontal>
                  </div>
                  <div className={`${headStyle.step1}`}></div>
                  <div className={`${headStyle.step2}`}></div>
                  <div className={`${headStyle.step3}`}></div>
                </div>
                <div className={`${headStyle.triggerCarousel2} ${styles.colorBlack} ${styles.backgroundWhite} `}>
                  <div className={`${styles.displayFlex} ${styles.flexCol} ${headStyle.marge} ${headStyle.espacement}`}>
                    <div className={`${styles.blendMode} ${styles.noSelect} ${styles.zIndex1}`}> 
                      <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle} ${styles.colorWhite}`}><span className={`${headStyle.ligature}`}>D</span>es services exceptionnels</h3>
                    </div>
                    <div className={`${styles.positionRelative}`}>
                      <div fadein='true' className={`${styles.geodeBigGlobal} ${effectStyles.fromBottom} ${styles.zIndex0}`}>
                          <div parallax='true' parallaxinit='false' parallaxbottom='true' className={`${styles.rectangle}`}>
                              <Rectangle></Rectangle>
                          </div>
                      </div>
                      <div fadein='true' className={`${styles.zIndex1} ${effectStyles.fromNowhere} ${styles.positionAbsolute} ${styles.noSelect} ${styles.blendMode}`}>
                        <p className={`${styles.boxParagraphe} ${styles.colorWhite}`}>Générez des leads d&apos;acheteurs, vendeurs, investisseurs, bailleurs etc., de manière automatisée</p>
                      </div>
                      <div>
                        <p className={`${styles.boxParagraphe} ${styles.invisbleTexte}`}>Boostez et restez proche de vos prospects en proposant la meilleure alerte immobilière, depuis votre site internet ou application mobile.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${headStyle.bigGlobal} ${headStyle.stepCarousel2} ${carousel.triggerGlobal}`}>
                  <div className={`${headStyle.global} ${carousel.gradiant}`}>
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
                <div className={`${styles.displayFlex} ${pricing.marginGlobal} ${styles.backgroundWhite} ${styles.positionRelative} ${styles.zIndexBig} ${styles.listingPrix}`}>
                  <PricingNormal></PricingNormal>
                  <PricingSpecial></PricingSpecial>
                  <PricingPro></PricingPro>
                </div>

                <div className={`${styles.displayFlex} ${pricing.marginPrice} ${styles.backgroundWhite} ${styles.positionRelative} ${styles.zIndexBig} ${styles.listingPrixMobile}`}>
                  <PricingMobile></PricingMobile>
                </div>

              </Scroll>
            </AppScript>
            <Footer></Footer>
          </main>
      </div>
  )
};
