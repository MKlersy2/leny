import styles from '/styles/Home.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.displayFlex}`}>
                <div>
                    <Image 
                    src={'/public/logo.png'}
                    width={}/>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}