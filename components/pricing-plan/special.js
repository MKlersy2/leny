import styles from '../../styles//Home.module.css';
import headStyle from '../../styles/components/landing.module.css';
import pricing from '../../styles/components/pricing.module.css';
import Valid from './valid'
import Disagree from './disagree'


export default function PricingSpecial() {
    return (
        <div className={`${pricing.global} ${pricing.specialGlobal}`}>
            <div className={pricing.specialInfo}>conseillé</div>
            <div className={pricing.subGlobal}>
                {/* <svg width="320px" height="505px" viewBox="0 0 320 505" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Plan-pricing" fill="none" stroke-opacity="0">
                        <g id="Group-6" transform="translate(0.000000, -16.000000)" fill="#1F212D">
                            <path d="M83.2508275,16.5 C88.3610205,16.5 93.2670091,18.5059959 96.9132285,22.0863808 L96.9132285,22.0863808 L113.814707,38.6826936 C117.647912,42.446688 122.80549,44.5555556 128.177744,44.5555556 L128.177744,44.5555556 L191.822256,44.5555556 C197.19451,44.5555556 202.352088,42.446688 206.185293,38.6826936 L206.185293,38.6826936 L223.086771,22.0863808 C226.732991,18.5059959 231.63898,16.5 236.749172,16.5 L236.749172,16.5 L289,16.5 C297.422342,16.5 305.047342,19.9138288 310.566757,25.4332432 C316.086171,30.9526576 319.5,38.5776576 319.5,47 L319.5,47 L319.5,490 C319.5,498.422342 316.086171,506.047342 310.566757,511.566757 C305.047342,517.086171 297.422342,520.5 289,520.5 L289,520.5 L31,520.5 C22.5776576,520.5 14.9526576,517.086171 9.43324317,511.566757 C3.91382878,506.047342 0.5,498.422342 0.5,490 L0.5,490 L0.5,47 C0.5,38.5776576 3.91382878,30.9526576 9.43324317,25.4332432 C14.9526576,19.9138288 22.5776576,16.5 31,16.5 L31,16.5 Z" id="Rectangle"></path>
                        </g>
                    </g>
                </svg> */}


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
                    <g id="Plan-pricing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Rectangle" transform="translate(17.000000, 1.000000)">
                            <use fill="black" fill-opacity="1" filter="url(#filter-6hf1hdp5-_-2)" xlinkHref="#path-6hf1hdp5-_-1"></use>
                            <use fill="#1F212D" fill-rule="evenodd" xlinkHref="#path-6hf1hdp5-_-1"></use>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={`${pricing.info} ${styles.colorWhite} ${pricing.special}`}>
                <div className={pricing.subInfo}>
                    <div className={pricing.header}>
                        <div className={`${pricing.title} ${styles.displayFlex}`}>
                            <div>
                                <h3 className={pricing.h3}>Agence</h3>
                                <p className={pricing.p}>
                                    <span className={pricing.bold}>05</span> <span className={pricing.lite}>services</span>
                                </p>
                            </div>
                            <div>
                                <p className={pricing.price}>119€</p>
                            </div>
                        </div>
                        <div className={`${pricing.title} ${styles.displayFlex}`}>
                            <div className={`${pricing.offer}`}>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricing.comment}><span className={pricing.lite}>Agrégateur en</span> <span className={pricing.bold}>marque blanche</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricing.comment}><span className={pricing.bold}>Dashboard</span> <span className={pricing.lite}>agent</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricing.comment}><span className={pricing.bold}>Extranet</span> <span className={pricing.lite}>acheteur</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricing.comment}><span className={pricing.lite}>Visualisation des</span> <span className={pricing.bold}>leads</span> <span className={pricing.lite}>recherche</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex}`}>
                                    <div className={pricing.state}><Valid></Valid></div>
                                    <div className={pricing.comment}><span className={pricing.lite}>Visualisation des</span> <span className={pricing.bold}>leads</span> <span className={pricing.lite}>recherche</span></div>
                                </div>
                                <div className={`${styles.displayFlex} ${pricing.flex} ${pricing.unvailable}`}>
                                    <div className={pricing.state}><Disagree></Disagree></div>
                                    <div className={pricing.comment}><span className={pricing.lite}>Visualisation des</span> <span className={pricing.bold}>leads</span> <span className={pricing.lite}>recherche</span></div>
                                </div>
                            </div>
                        </div>
                        <div noclickButton='true' className={pricing.button}>
                            Choisir l&apos;offre
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}