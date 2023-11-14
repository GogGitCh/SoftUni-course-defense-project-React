import styles from './Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareThreads, faFacebook, faYoutube, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className={styles['footer-wrapper']}>
            <div className={styles['contacts']}>
                <h4 className={styles['h4']}>Contact us:</h4>
                <ul className={styles['ul']}>
                    <li className={styles['li']} ><span className={styles['span']}>Adress:</span> Lorem ipsum dolor sit.</li>
                    <li className={styles['li']} ><span className={styles['span']}>Phone:</span> +355 410 1259</li>
                    <li className={styles['li']} ><span className={styles['span']}>E-mail:</span> piip1820@gmail.com</li>
                </ul>
            </div>
            <div className={styles['social-media']}>
                <FontAwesomeIcon className={styles['icons']} icon={faSquareThreads} />
                <FontAwesomeIcon className={styles['icons']} icon={faFacebook} />
                <FontAwesomeIcon className={styles['icons']} icon={faYoutube} />
                <FontAwesomeIcon className={styles['icons']} icon={faSquareInstagram} />
            </div>
        </div>
    );
}

export default Footer
