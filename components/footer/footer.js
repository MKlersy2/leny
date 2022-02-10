import styles from '/styles/Home.module.css';
import headStyle from '/styles/components/landing.module.css'
import Image from 'next/image';
import footer from '/styles/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={`${footer.global} ${headStyle.backgroundBlack}`}>
            <div className={`${styles.displayFlex} ${footer.subGlobal}`}>
                <div className={footer.box}>
                    <div className={`${styles.positionRelative} ${styles.positionRelativeSize} ${footer.logoGlobal}`}>
                        <Image 
                            src={'/bigLogo.png'}
                            width={231}
                            alt={'Logo de leny'}
                            priority
                            objectFit='cover'
                            height={143}
                        />
                    </div>
                </div>
                <div className={footer.box}>
                    <div className={footer.subBox}>
                        <div className={footer.title}>
                            <h4><span className={headStyle.ligature}>L</span>orem</h4>
                        </div>
                        <div className={footer.liste}>
                            <div>
                                Lorem
                            </div>
                            <div>
                                Ipsum
                            </div>
                            <div>
                                Dummy
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footer.box}>
                    <div className={footer.subBox}>
                        <div className={footer.title}>
                            <h4><span className={headStyle.ligature}>M</span>igot</h4>
                        </div>
                        <div className={footer.liste}>
                            <div>
                                Lorem
                            </div>
                            <div>
                                Ipsum
                            </div>
                            <div>
                                Dummy
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footer.box}>
                    <div className={footer.subBox}>
                        <div className={footer.title}>
                            <h4><span className={headStyle.ligature}>E</span>psum</h4>
                        </div>
                        <div className={footer.liste}>
                            <div>
                                Lorem
                            </div>
                            <div>
                                Ipsum
                            </div>
                            <div>
                                Dummy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}