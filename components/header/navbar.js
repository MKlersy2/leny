import header from '/styles/components/header.module.css';
import Logo from '/components/logo/logo-simple.js';
import styles from '/styles/Home.module.css'


export default function navBar() {
    return (
    
        <div className={`${header.global} ${styles.displayFlex}`}>
            <div className={`${header.left}`}>
                <div className={`${header.subGlobal}`}>
                    <div className={`${header.logo}`}>
                        <Logo></Logo>
                    </div>
                </div>
            </div>
            <div className={`${header.right}`}>
                <div className={`${header.subGlobal} ${styles.displayFlex}`}>
                    <div clickbutton='true' className={`${header.button} ${header.buttonLite}`}>
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