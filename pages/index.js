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
                  <div className={`${styles.positionRelative} ${styles.positionRelativeSize} ${styles.noSelect}`}>
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
                        <h1 fadein='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>Le</span> secret <span className={styles.lighter}>le mieux</span></h1>
                      </div>
                      <div className={effectStyles.box}>
                        <h1 fadein='true' delay='true' className={`${styles.title} ${effectStyles.fromBottom}`}><span className={styles.lighter}>gardé des agents.</span></h1>
                      </div>
                    </div>
                  </div>
                  <div noclick='true' className={`${headStyle.globalImage} ${styles.imagePresentation}`}>
                    <div noclick='true' parallax='true' parallaxtop='true' parallaxinit='true' style={{width: '330px', height:'600px'}} className={`${headStyle.image}`}>
                      <div noclick='true' className={`${styles.positionRelative} ${styles.positionRelativeSize}`}>
                        <Image   
                        noclick='true'              
                        src="/images/boxHomepage.png"
                        priority
                        layout='fill'
                        objectFit='cover'
                        objectPosition='bottom right'
                        className={`${headStyle.triggerHover}`}
                        alt='Photo statut'/>
                        <Image   
                        noclick='true'              
                        src="/images/boxHomepage2.png"
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
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>P</span>ensé par des pros, pour des pros.</h3>
                    <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Plus qu&apos;un outil, Leny est votre nouvel allié. Accédez à l&apos;intégralité du marché, aux biens de vos partenaires et à l&apos;offre Off-Market. Dénichez la pépite de vos clients et immergez-les dans l&apos;univers Leny, en restant leur unique interlocuteur.</p>
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
                      <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle} ${styles.colorWhite}`}><span className={`${headStyle.ligature}`}>L</span>e chasseur immobilier digital et pertinent.</h3>
                    </div>
                    <div className={`${styles.positionRelative}`}>
                      <div fadein='true' className={`${styles.geodeBigGlobal} ${effectStyles.fromBottom} ${styles.zIndex0}`}>
                          <div parallax='true' parallaxinit='false' parallaxbottom='true' className={`${styles.rectangle}`}>
                              <Rectangle></Rectangle>
                          </div>
                      </div>
                      <div fadein='true' className={`${styles.zIndex1} ${effectStyles.fromNowhere} ${styles.positionAbsolute} ${styles.noSelect} ${styles.blendMode}`}>
                        <p className={`${styles.boxParagraphe} ${styles.colorWhite}`}>Leny est le nouvel écosystème qui fluidifie le marché immobilier. En donnant accès à l&apos;entièreté de l&apos;offre immobilière, votre nouvel allié devient un véritable chasseur efficace et complet. Collaborer entre agences devient utile, et récompensé.</p>
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
                    <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle}`}><span className={`${headStyle.ligature}`}>L</span>&apos;efficacité sur-mesure.</h3>
                    <p fadein='true' className={`${effectStyles.fromNowhere} ${styles.boxParagraphe}`}>Parce que chaque agence à son effectif et ses besoins, Leny s&apos;adapte à vous. Choisissez votre formule et soyez enfin l&apos;agent que vos clients attendaient.</p>
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
