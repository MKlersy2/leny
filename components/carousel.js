import carousel from '../styles/components/carousel.module.css'
import styles from '../styles/Home.module.css'
import effectStyles from '../styles/effect.module.css'
import headStyle from '../styles/components/landing.module.css'


export default function Carousel() {
    return (
        <div className={`${carousel.global} ${carousel.number2}`}>
            <div className={`${styles.positionRelative} ${carousel.positionCenter}`}>
                <div className={`${carousel.color} ${carousel.liste} ${carousel.positionCenterListe} ${styles.displayFlex} ${styles.flexCol}`}>
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
                            <div fadein='true' id='carouselFst' className={`${effectStyles.appear} ${effectStyles.fromRight} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>V</span>otre implication est récompensée</h3>
                                <p className={`${styles.boxParagraphe} ${carousel.commentaires}`}>Le LNY est la monnaie qui vous est attribuée en fonction de la note de votre agence. Cette note est définie par votre taux de data provide et votre taux de contribution. Plus vous utilisez Leny et diffusez vos biens sur la plateforme, plus votre visibilité est accrue et votre activité se voit récompensée. La cryptomonnaie LNY est directement versée dans votre wallet Metamask et vous permet de payer les abonnements Leny.</p>
                            </div>
                            <div id='carouselScd' className={`${effectStyles.fromRight} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>R</span>estez en avant</h3>
                                <p className={`${styles.boxParagraphe} ${carousel.commentaires}`}>Avec Leny, vous partagez avec vos clients un lien dédié à votre agence et à votre nom. Votre compte peut être multi-utilisateurs au sein de votre agence, ainsi vos agents restent un interlocuteur unique tout au long de la recherche de vos clients, en étant en mesure de proposer un pool de biens correspondants, à votre image.</p>
                            </div>
                            <div id='carouselThd' className={`${effectStyles.fromRight} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}><span className={`${headStyle.ligature}`}>L</span>orem ipsum</h3>
                                <p className={`${styles.boxParagraphe} ${carousel.commentaires}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}