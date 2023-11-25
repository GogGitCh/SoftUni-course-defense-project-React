import styles from './Portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PortfolioCardItem from './PortfolioCardItem';

function Portfolio() {
    return (
        <div className={styles['main-gallery-wrapper']}>

            <div className={styles['types-gallery-wrapper']}>
                <p className={styles['type']}>
                    My Portfolio
                </p>
                <div className={styles['styles-row']}>
                    <button className={styles['arrow-button-left']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronLeft} />
                    </button>
                    <ul className={styles['style']} >
                        <li className={styles['gallery-card']}>
                            <PortfolioCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <PortfolioCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <PortfolioCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <PortfolioCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <PortfolioCardItem />
                        </li>
                    </ul>
                    <button className={styles['arrow-button-right']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronRight} />
                    </button>
                </div>
            </div>

    


        </div>
    );
}

export default Portfolio
