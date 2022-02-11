import carouselHorizontal from '../styles/components/carouselHorizontal.module.css'
import styles from '../styles/Home.module.css'
import effectStyles from '../styles/effect.module.css'
import headStyle from '../styles/components/landing.module.css'
import Image from 'next/image'
import Simple from './geodes/simple'
import Double from './geodes/double'
import Quadruple from './geodes/quadruple'


export default function CarouselHorizontal() {
    return (
        <div className={`${carouselHorizontal.global} ${carouselHorizontal.number1}`}>
            <div className={`${styles.positionRelative} ${carouselHorizontal.positionCenter}`}>
                <div className={`${carouselHorizontal.color} ${carouselHorizontal.liste} ${carouselHorizontal.positionCenterListe} ${styles.displayFlex}`}>
                    <div className={`${styles.displayFlex} ${carouselHorizontal.listeCenter} ${carouselHorizontal.horizontal}`}>
                        <div id='step1'>1</div>
                        <div className={`${carouselHorizontal.loader} ${carouselHorizontal.loaderHorizontal} ${carouselHorizontal.inactive}`}>
                            <div className={`${carouselHorizontal.step}`}></div>
                        </div>
                        <div id='step2'>2</div>
                        <div className={`${carouselHorizontal.loader} ${carouselHorizontal.loaderHorizontal} ${carouselHorizontal.inactive}`}>
                            <div className={`${carouselHorizontal.step}`}></div>
                        </div>
                        <div id='step3'>3</div>
                        <div className={`${carouselHorizontal.loader} ${carouselHorizontal.loaderHorizontal} ${carouselHorizontal.inactive}`}>
                            <div className={`${carouselHorizontal.step}`}></div>
                        </div>
                    </div>
                    <div className={carouselHorizontal.boxHorizontal}>
                        <div className={`${styles.displayFlex} ${styles.flexCol} ${carouselHorizontal.listeDesc}`}>
                            <div className={carouselHorizontal.fake}></div>
                            <div fadein='true' id='carouselFst' className={`${effectStyles.appear} ${effectStyles.fromNowhere} ${carouselHorizontal.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>A</span>ugmentez vos conversions</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>Votre présence quotidienne ainsi que celle de vos partenaires entre les annonces et dans les messageries de vos utilisateurs, durant toute leur recherche immobilière. Proposez vos services, au moment approprié.</p>
                            </div>
                            <div id='carouselScd' className={`${effectStyles.fromNowhere} ${carouselHorizontal.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>B</span>oostez votre canal d&apos;acquisition</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>Attirez de nouveaux utilisateurs en les aidant à trouver leur futur logement grâce à une alerte personnalisée, en temps réel, des nouvelles annonces mises en ligne.</p>
                            </div>
                            <div id='carouselThd' className={`${effectStyles.fromNowhere} ${carouselHorizontal.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>G</span>érez vos encarts publicitaires</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>Vous aurez la possibilité de monétiser une part de vos encarts publicitaires. Des partenariats rémunérés vous seront proposés : courtiers en prêts immobiliers, architectes, décorateurs, menuisiers, chasseurs, diagnostiqueurs, assureurs, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}