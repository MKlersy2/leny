import styles from '../../styles/Home.module.css';
import pricing from '../../styles/components/pricing.module.css';
import pricingGeneral from '../../styles/components/pricingGeneral.module.css';
import Valid from './valid'
import Disagree from './disagree'
import effectStyles from '../../styles/effect.module.css'
import Link from 'next/link';


export default function PricingNormal() {
    return (
        <div className={`${pricing.global} ${effectStyles.fromRight}`} fadein='true'>
            <div className={`${pricing.subGlobal}`}>
                <svg width="320px" height="505px" viewBox="0 0 320 505" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Plan-pricing" fill="none" strokeOpacity="0">
                        <g id="Group-6" transform="translate(0.000000, -0.000000)" fill="#F0F0F0">
                            <path d="M83.2508275,0.5 C88.3610205,0.5 93.2670091,2.50599593 96.9132285,6.08638084 L96.9132285,6.08638084 L113.814707,22.6826936 C117.647912,26.446688 122.80549,28.5555556 128.177744,28.5555556 L128.177744,28.5555556 L191.822256,28.5555556 C197.19451,28.5555556 202.352088,26.446688 206.185293,22.6826936 L206.185293,22.6826936 L223.086771,6.08638084 C226.732991,2.50599593 231.63898,0.5 236.749172,0.5 L236.749172,0.5 L289,0.5 C297.422342,0.5 305.047342,3.91382878 310.566757,9.43324317 C316.086171,14.9526576 319.5,22.5776576 319.5,31 L319.5,31 L319.5,474 C319.5,482.422342 316.086171,490.047342 310.566757,495.566757 C305.047342,501.086171 297.422342,504.5 289,504.5 L289,504.5 L31,504.5 C22.5776576,504.5 14.9526576,501.086171 9.43324317,495.566757 C3.91382878,490.047342 0.5,482.422342 0.5,474 L0.5,474 L0.5,31 C0.5,22.5776576 3.91382878,14.9526576 9.43324317,9.43324317 C14.9526576,3.91382878 22.5776576,0.5 31,0.5 L31,0.5 Z" id="Rectangle">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={`${pricing.info} ${styles.colorBlack}`}>
                <div className={pricing.subInfo}>
                    <div className={pricing.header}>
                        <div className={`${pricingGeneral.title} ${styles.displayFlex}`}>
                            <div>
                                <h3 className={pricingGeneral.h3}>Premium</h3>
                                <p className={pricingGeneral.p}>
                                    <span className={pricingGeneral.bold}>06</span> <span className={pricingGeneral.lite}>services</span>
                                </p>
                            </div>
                            <div>
                                <p className={pricingGeneral.price}>149???</p>
                            </div>
                        </div>
                        <div className={`${pricingGeneral.title} ${styles.displayFlex}`}>
                            <div className={`${pricing.offer}`}>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Agr??gateur en</span> <span className={pricingGeneral.bold}>marque blanche</span></div>
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
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Partage du compte jusqu&apos;??</span> <span className={pricingGeneral.bold}>5 agents</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricingGeneral.comment}><span className={pricingGeneral.lite}>Publicit??</span> <span className={pricingGeneral.bold}>partenaires</span> <span className={pricingGeneral.lite}>int??gr??es</span></div>
                                </div>
                            </div>
                        </div>
                        <Link href='/profile-builder/pro' passHref>
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