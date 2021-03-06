import styles from '/styles/Home.module.css';
import headStyle from '/styles/components/landing.module.css'
import Logo from '../logo/logo-simple';
import footer from '/styles/components/footer.module.css';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className={`${footer.global} ${headStyle.backgroundBlack}`}>
            <div className={`${styles.displayFlex} ${footer.subGlobal}`}>
                <div className={footer.box}>
                    <ActiveLink></ActiveLink>
                </div>
                <div className={footer.box}>
                    <div className={footer.subBox}>
                        <div className={footer.title}>
                            <h4><span className={headStyle.ligature}>L</span>orem</h4>
                        </div>
                        <div className={footer.liste}>
                            <div className={footer.subListe}>
                                Lorem
                            </div>
                            <div className={footer.subListe}>
                                Ipsum
                            </div>
                            <div className={footer.subListe}>
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
                            <div className={footer.subListe}>
                                Lorem
                            </div>
                            <div className={footer.subListe}>
                                Ipsum
                            </div>
                            <div className={footer.subListe}>
                                Dummy
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footer.box}>
                    <div className={footer.subBox}>
                        <div className={footer.title}>
                            <h4><span className={headStyle.ligature}>C</span>ontact</h4>
                        </div>
                        <div className={footer.liste}>
                            <div className={footer.subListe}>
                                <Link href={'/equipe/'} passHref>
                                    <div clickbutton='true' >L&apos;??quipe</div>
                                </Link>
                            </div>
                            <div className={footer.subListe}>
                                Ipsum
                            </div>
                            <div className={footer.subListe}> 
                                Dummy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import { useRouter } from 'next/router'

export function ActiveLink() {
  const router = useRouter()
     return (

            <Link replace href={router.pathname === '/' ? '#' : '/'} passHref>
                <div clickbutton='true' router={router.pathname} className={`${styles.positionRelative} ${styles.positionRelativeSize} ${footer.logoGlobal}`}>
                    <Logo/>
                </div>
            </Link>

     
     )

}
   