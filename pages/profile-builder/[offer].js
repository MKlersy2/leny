import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import headStyle from '../../styles/components/landing.module.css'
import Script from '../appScripts'
import effectStyles from '../../styles/effect.module.css'
import MouseFollow from '../../components/mouseFollow.js'
import Link from 'next/link'
import pricing from '../../styles/components/pricing.module.css';
import pricingPlan from '../../styles/components/pricingPlan.module.css';


const Post = () => {
  const router = useRouter()
  const { offer } = router.query
  if(offer === 'normal') {
    var title = 'individuel';
    var productId = 'price_1KPwyAJcmh9SCSTioCad92dM';
  } else if (offer === 'special') {
    var title = 'agence';
    var productId = 'price_1KPrgnJcmh9SCSTinVwOuGf4';
  } else if(offer === 'pro') {
    var title = 'premium';
    var productId = 'price_1KPwzaJcmh9SCSTiqhVh0tR7';
  } else {
    var title = 'individuel';
    var productId = 'price_1KPwyAJcmh9SCSTioCad92dM';
  };

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
                        <div className={headStyle.global}>
                          <DifferentOffer offer={offer}/>
                        </div>
                    </Script>
            </main>
        </div>
    )

}

function DifferentOffer(props) {
  const offerProps = props.offer;
  switch (offerProps) {
    case 'normal':
      return(
        <PresentationPack name={'individuel'} offer={'normal'}/>
      )
    case 'special':
      return(
        <PresentationPack name={'agence'} offer={'special'}/>
      )
    case 'pro':
      return(
        <PresentationPack name={'premium'} offer={'pro'}/>
      )
    default:
      return(
        <div>Une erreur s'est produite</div>
      )
  }
}

function PresentationPack(props) {
  const offerProps = props.offer;
  const titleProps = props.name;
  return(
    <Script>
      <div className={`${headStyle.subTitleGlobal} ${pricingPlan.global}`}>
          <h1 fadein='true' className={`${effectStyles.fromBottom} ${pricingPlan.boxSubtitle}`}><span className={`${headStyle.ligature}`}>N</span>otre pack {`${titleProps}`}</h1>
          <p fadein='true' className={`${effectStyles.fromNowhere} ${pricingPlan.boxParagraphe}`}>Caedibus fecit angustus aegrum aegrum.</p>
          <Link href={`https://api.vendmy.com/leny/stripe/create-checkout-session.php?url=${process.env.HOSTNAME}${process.env.PORT}&offer=${offerProps}`}>
              <div noclickbutton='true' className={`${pricing.button} ${pricingPlan.littleButton}`}>
                  Souscrire à l&apos;offre
              </div>
          </Link>
      </div>
    </Script>
  )
}

export default Post