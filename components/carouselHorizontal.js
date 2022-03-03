import carouselHorizontal from '../styles/components/carouselHorizontal.module.css'
import styles from '../styles/Home.module.css'
import effectStyles from '../styles/effect.module.css'
import headStyle from '../styles/components/landing.module.css'


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
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>E</span>toffez votre offre.</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>Le superpouvoir de Leny vous donne accès à la sélection de biens la plus complète du marché. L&apos;ensemble des propriétés commercialisées par les professionnels et les particuliers devient enfin accessible, sur un portail unique. LenyPlus rajoute des cordes à votre arc avec un panel toujours plus enrichi à proposer : les biens off-market du moment se dévoilent à vos clients, en toute confidentialité.</p>
                            </div>
                            <div id='carouselScd' className={`${effectStyles.fromNowhere} ${carouselHorizontal.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>F</span>ocus sur l&apos;essentiel.</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>Votre temps est précieux Leny collecte toutes les informations nécessaires à la constitution de votre base acquéreur. L&apos;enregistrement automatique de leur critères de recherche vous permet de rester concentré sur l&apos;essentiel : votre métier.</p>
                            </div>
                            <div id='carouselThd' className={`${effectStyles.fromNowhere} ${carouselHorizontal.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carouselHorizontal.title}`}><span className={`${headStyle.ligature}`}>D</span>evenez indispensable.</h3>
                                <p className={`${styles.boxParagraphe} ${carouselHorizontal.commentaires}`}>La magie opère quand vous utilisez Leny, l&apos;outil de croisement le plus abouti qui vous donne accès aux biens de vos confrères, des particuliers de votre ville, et aux biens &laquo; secrets &raquo;. En recevant une sélection inédite, directement par whatsapp, mail ou sms, votre client sort du brouillard. Trouvez un bien n&apos;a jamais été aussi facile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}