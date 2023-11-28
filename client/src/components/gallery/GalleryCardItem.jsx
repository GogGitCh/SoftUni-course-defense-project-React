import styles from './GalleryCardItem.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faBucket, faTrowel, faBook, faFileSignature } from '@fortawesome/free-solid-svg-icons'



function GalleryCardItem({
    // _id,
    // _ownerId,
    plasterImg,
    // brand,
    type,
    // style,
    // cost,
    // materials,
    // tools,
    // manual,
    // apply,
    // _createdOn,
}) {

    const showInfoOption = () => {
        console.log('show');
    }

    const hideInfoOption = () => {
        console.log('hide');
    }


    return (
        <div className={styles['main-item-wrapper']}>
                <p className={styles['item-options-info']}>lorem2aospm dopas aslmd masmd maksm fkoanowfn awfn oawnof nawf nwaf naownf nawfn awonf[ wenofhwoiegf[h9UQE'H[9FI8H 'DKPASKDNQUWQDOAJ SDHOI   Oihihwifd[ wiodhqi</p>
            <div className={styles['item-image']}>
                <img className={styles['img']} src={plasterImg} alt={type} />
            </div>
            <div className={styles['item-options']}>
                <div className={styles['materials-coast']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faHandHoldingDollar} />
                </div>
                <div className={styles['labour-coast']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faBucket} />

                </div>
                <div className={styles['tools-needed']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faTrowel} />

                </div>
                <div className={styles['implemenmtation']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faBook} />

                </div>
                <div className={styles['apply']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={`${styles['icon']} ${styles['last']}`} icon={faFileSignature} />

                </div>
            </div>
        </div>
    );
}

export default GalleryCardItem
