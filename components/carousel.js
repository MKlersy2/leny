import carousel from '../styles/components/carousel.module.css'
import styles from '../styles/Home.module.css'
import effectStyles from '../styles/effect.module.css'


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
                                <h3 fadein='true' className={`${effectStyles.fromBottom} ${styles.boxSubtitle} ${carousel.title}`}>Lorem Ipsum simply</h3>
                                <p fadein='true' className={`${effectStyles.fromBottom} ${styles.boxParagraphe}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                            </div>
                            <div id='carouselScd' className={`${effectStyles.fromBottom} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}>Lorem Simply Ipsum</h3>
                                <p className={`${styles.boxParagraphe}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                            </div>
                            <div id='carouselThd' className={`${effectStyles.fromBottom} ${carousel.textGlobal}`}>
                                <h3 className={`${styles.boxSubtitle} ${carousel.title}`}>Ipsum Simply Lorem</h3>
                                <p className={`${styles.boxParagraphe}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}