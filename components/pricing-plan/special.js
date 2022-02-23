import styles from '../../styles//Home.module.css';
import pricing from '../../styles/components/pricing.module.css';
import pricingGeneral from '../../styles/components/pricingGeneral.module.css';
import Valid from './valid'
import Disagree from './disagree'
import effectStyles from '../../styles/effect.module.css'
import Link from 'next/link';



export default function PricingSpecial() {
    return (
        <div className={`${pricing.global} ${pricing.specialGlobal} ${effectStyles.fromNowhere}`} fadein='true'>
            <div className={pricing.specialInfo}>conseillé</div>
            <div className={pricing.subGlobal}>
                <svg width="354px" height="539px" viewBox="0 0 354 539" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path d="M31,16 L83.2508275,16 C88.4920511,16 93.5238343,18.0574317 97.2635465,21.7296214 L114.165025,38.3259342 C117.904737,41.9981238 122.93652,44.0555556 128.177744,44.0555556 L191.822256,44.0555556 C197.06348,44.0555556 202.095263,41.9981238 205.834975,38.3259342 L222.736453,21.7296214 C226.476166,18.0574317 231.507949,16 236.749172,16 L289,16 C306.120827,16 320,29.8791728 320,47 L320,490 C320,507.120827 306.120827,521 289,521 L31,521 C13.8791728,521 5.64941031e-15,507.120827 0,490 L0,47 C-5.64941031e-15,29.8791728 13.8791728,16 31,16 Z" id="path-6hf1hdp5-_-1"></path>
                        <filter x="-8.0%" y="-5.0%" width="115.9%" height="110.1%" filterUnits="objectBoundingBox" id="filter-6hf1hdp5-_-2">
                            <feMorphology radius="2.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Plan-pricing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Rectangle" transform="translate(17.000000, 1.000000)">
                            <use fill="black" fillOpacity="1" filter="url(#filter-6hf1hdp5-_-2)" xlinkHref="#path-6hf1hdp5-_-1"></use>
                            <use fill="#1F212D" fillRule="evenodd" xlinkHref="#path-6hf1hdp5-_-1"></use>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={`${pricing.info} ${styles.colorWhite} ${pricing.special}`}>
                <div className={pricing.subInfo}>
                    <div className={pricing.header}>
                        <div className={`${pricingGeneral.title} ${styles.displayFlex}`}>
                            <div>
                                <h3 className={pricingGeneral.h3}>Agence</h3>
                                <p className={pricingGeneral.p}>
                                    <span className={pricingGeneral.bold}>05</span> <span className={pricingGeneral.lite}>services</span>
                                </p>
                            </div>
                            <div>
                                <p className={pricingGeneral.price}>119€</p>
                            </div>
                        </div>
                        <div className={`${pricingGeneral.title} ${styles.displayFlex}`}>
                            <div className={`${pricing.offer}`}>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Agrégateur en</span> <span className={pricingGeneral.bold}>marque blanche</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.bold}>Dashboard</span> <span className={pricingGeneral.lite}>agent</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.bold}>Extranet</span> <span className={pricingGeneral.lite}>acheteur</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Visualisation des</span> <span className={pricingGeneral.bold}>leads</span> <span className={pricingGeneral.lite}>recherche</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Partage du compte jusqu&apos;à</span> <span className={pricingGeneral.bold}>5 agents</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex} ${pricingGeneral.unvailable}`}>
                                    <div className={pricing.state}><Disagree></Disagree></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Publicité</span> <span className={pricingGeneral.bold}>partenaires</span> <span className={pricingGeneral.lite}>intégrées</span></div>
                                </div>
                            </div>
                        </div>
                        <Link href='/profile-builder/special' passHref>
                            <div clickbutton='true' className={pricing.button}>
                                Choisir l&apos;offre
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}