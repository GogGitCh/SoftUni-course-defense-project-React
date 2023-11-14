import styles from './GalleryCardItem.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faBucket, faTrowel, faBook, faFileSignature } from '@fortawesome/free-solid-svg-icons'



function GalleryCardItem() {
    return (
        <div className={styles['main-item-wrapper']}>
            <div className={styles['item-image']}>
                <img className={styles['img']} src="../../../public/images/gallery/gallery_content/type_1_1.jpg" alt="" />
            </div>
            <div className={styles['item-options']}>
                <div className={styles['materials-coast']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faHandHoldingDollar} />
                </div>
                <div className={styles['labour-coast']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faBucket} />

                </div>
                <div className={styles['tools-needed']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faTrowel} />

                </div>
                <div className={styles['implemenmtation']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faBook} />

                </div>
                <div className={styles['apply']}>
                    <FontAwesomeIcon className={`${styles['icon']} ${styles['last']}`}  icon={faFileSignature} />

                </div>
            </div>
        </div>
    );
}

export default GalleryCardItem
