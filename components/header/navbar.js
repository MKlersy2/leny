import header from '/styles/components/header.module.css';
import Logo from '/components/logo/logo-simple.js';
import styles from '/styles/Home.module.css'
import Link from 'next/link';

export default function navBar() {
    return (
    
        <div className={`${header.global} ${styles.displayFlex}`}>
            <div className={`${header.left}`}>
                <div className={`${header.subGlobal}`}>
                    <Link href={'/'} passHref>
                        <div clickbutton='true' className={`${header.logoGlobal}`}>
                            <Logo></Logo>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`${header.right}`}>
                <div className={`${header.subGlobal} ${styles.displayFlex}`}>
                    <div clickbutton='true' className={`${header.button} ${header.buttonLite} ${header.whitePaper}`}>
                        White paper
                    </div>
                    <div clickbutton='true' className={`${header.button} ${header.buttonBig}`}>
                        Participer à l&apos;ICO
                    </div>
                </div>
            </div>
        </div>
    
    )
}