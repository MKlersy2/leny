import React from "react";
import pricingMobile from '../../styles/components/pricingMobile.module.css';
import pricingGeneral from '../../styles/components/pricingGeneral.module.css';
import styles from '../../styles/Home.module.css';
import Valid from './valid'
import Disagree from './disagree'
import Link from "next/link";


export default function Mobile() {
    return (
        <div className={pricingMobile.global}>
            <div className={`${pricingMobile.subGlobal} ${styles.displayFlex}`}>
                <div className={pricingMobile.details}>
                    <div className={`${pricingMobile.general}`}>
                        <h3 className={pricingGeneral.h3}>Individuel</h3>
                        <p className={pricingGeneral.p}>
                            <span className={pricingGeneral.bold}>04</span> <span className={pricingGeneral.lite}>services</span>
                        </p>
                    </div>
                    <div className={pricingMobile.globalDescription}>
                        <div className={`${pricingMobile.description}`}>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Agrégateur en</span> <span className={pricingGeneral.bold}>marque blanche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Dashboard</span> <span className={pricingGeneral.lite}>agent</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Extranet</span> <span className={pricingGeneral.lite}>acheteur</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Visualisation des</span> <span className={pricingGeneral.bold}>leads</span> <span className={pricingGeneral.lite}>recherche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Disagree></Disagree></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Partage du compte jusqu&apos;à</span> <span className={pricingGeneral.bold}>5 agents</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Disagree></Disagree></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Publicité</span> <span className={pricingGeneral.bold}>partenaires</span> <span className={pricingGeneral.lite}>intégrées</span></div>
                            </div>
                        </div>
                        <Link href='/profile-builder/normal' passHref>
                            <div clickbutton='true' className={pricingMobile.button}>
                                Essai gratuit
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`${pricingMobile.details} ${pricingMobile.special}`}>
                    <div className={`${pricingMobile.general}`}>
                        <h3 className={pricingGeneral.h3}>Agence</h3>
                        <p className={pricingGeneral.p}>
                            <span className={pricingGeneral.bold}>05</span> <span className={pricingGeneral.lite}>services</span>
                        </p>
                    </div>
                    <div className={pricingMobile.globalDescription}>
                        <div className={`${pricingMobile.description}`}>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Agrégateur en</span> <span className={pricingGeneral.bold}>marque blanche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Dashboard</span> <span className={pricingGeneral.lite}>agent</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Extranet</span> <span className={pricingGeneral.lite}>acheteur</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Visualisation des</span> <span className={pricingGeneral.bold}>leads</span> <span className={pricingGeneral.lite}>recherche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Partage du compte jusqu&apos;à</span> <span className={pricingGeneral.bold}>5 agents</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Disagree></Disagree></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Publicité</span> <span className={pricingGeneral.bold}>partenaires</span> <span className={pricingGeneral.lite}>intégrées</span></div>
                            </div>
                        </div>
                        <Link href='/profile-builder/special' passHref>
                            <div clickbutton='true' className={`${pricingMobile.button}`}>
                                Essai gratuit
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={pricingMobile.details}>
                    <div className={pricingMobile.general}>
                        <h3 className={pricingGeneral.h3}>Premium</h3>
                        <p className={pricingGeneral.p}>
                            <span className={pricingGeneral.bold}>06</span> <span className={pricingGeneral.lite}>services</span>
                        </p>
                    </div>
                    <div className={pricingMobile.globalDescription}>
                        <div className={`${pricingMobile.description}`}>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Agrégateur en</span> <span className={pricingGeneral.bold}>marque blanche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Dashboard</span> <span className={pricingGeneral.lite}>agent</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.bold}>Extranet</span> <span className={pricingGeneral.lite}>acheteur</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Visualisation des</span> <span className={pricingGeneral.bold}>leads</span> <span className={pricingGeneral.lite}>recherche</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Partage du compte jusqu&apos;à</span> <span className={pricingGeneral.bold}>5 agents</span></div>
                            </div>
                            <div className={`${styles.displayFlex} ${pricingMobile.flex} ${pricingGeneral.unvailable}`}>
                                <div className={pricingMobile.state}><Valid></Valid></div>
                                <div className={`${pricingGeneral.comment} ${pricingMobile.comment}`}><span className={pricingGeneral.lite}>Publicité</span> <span className={pricingGeneral.bold}>partenaires</span> <span className={pricingGeneral.lite}>intégrées</span></div>
                            </div>
                        </div>
                        <Link href='/profile-builder/pro' passHref>
                            <div clickbutton='true' className={`${pricingMobile.button}`}>
                                Essai gratuit
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}