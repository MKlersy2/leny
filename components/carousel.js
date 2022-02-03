import carousel from '../styles/components/carousel.module.css'
import styles from '../styles/Home.module.css'
import effectStyles from '../styles/effect.module.css'
import headStyle from '../styles/components/landing.module.css'


export default function Carousel() {
    return (
        <div className={`${carousel.global} ${carousel.number2}`}>
            <div>
                <div className={`${carousel.color} ${carousel.liste} ${styles.displayFlex} ${styles.flexCol}`}>
                    <div className={`${styles.displayFlex} ${carousel.listeCenter}`}>
                        <div id='step1'>1</div>
                        <div className={`${carousel.loader} ${carousel.inactive}`}>
                            <div className={`${carousel.step}`}></div>
                        </div>
                        <div id='step2'>2</div>
                        <div className={`${carousel.loader} ${carousel.inactive}`}>
                            <div className={`${carousel.step}`}></div>
                        </div>
                        <div id='step3'>3</div>
                        <div className={`${carousel.loader} ${carousel.inactive}`}>
                            <div className={`${carousel.step}`}></div>
                        </div>
                    </div>
                    <div className={carousel.boxHorizontal}>
                        <div className={`${styles.displayFlex} ${styles.flexCol} ${carousel.listeDesc}`}>
                            <div id='carouselFst' className={`${effectStyles.appear} ${carousel.textGlobal}`}>
                                <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>V</span>ous êtes une agence immobilière</h3>
                                <p fadein='true' className={`${effectStyles.fromBottom} ${styles.boxParagraphe}`}>Assignez les recherches enregistrées, les estimations réalisées, les demandes d&apos;informations - via la messagerie intégrée - à un ou plusieurs de vos agents, en fonction de leur sectorisation géographique. Notre plateforme immobilière en marque blanche vous permettra de tracker et analyser les comportements de vos utilisateurs. Vos agents pourront désormais anticiper et vérifier si les confrères proposants les biens rajoutés en favoris sont ouverts ou non l&apos;inter-cabinet.</p>
                            </div>
                            <div id='carouselScd' className={`${effectStyles.fromBottom} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>V</span>ous êtes un chasseur immobilier</h3>
                                <p className={`${styles.boxParagraphe}`}>Profitez du meilleur agrégateur d’annonces immobilières en temps réel. Choisissez et envoyez facilement des sélections d&apos;annonces qui correspondent aux recherches de vos clients. Personnalisez ces envois avec votre logo, vos couleurs et depuis l&apos;adresse e-mail de votre choix. Suivez ensuite les statistiques de consultations des annonces envoyées depuis votre dashboard.</p>
                            </div>
                            <div id='carouselThd' className={`${effectStyles.fromBottom} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>V</span>ous êtes un courtier</h3>
                                <p className={`${styles.boxParagraphe}`}>Attirez de nouveaux utilisateurs en les aidant à trouver leur futur logement, grâce à un outil automatisant les alertes personnalisées en temps réel. Proposez vos services au moment approprié.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}