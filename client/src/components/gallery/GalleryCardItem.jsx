/* eslint-disable no-useless-escape */
import { useState } from 'react';
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

    cost,
    materials,
    tools,
    manual,
    apply,
    // _createdOn,
}) {

    const [showInfoOpt, setShowInfoOpt] = useState(false);
    const [option, setOption] = useState('');

    const showInfoOption = (e) => {
        const className = e.currentTarget.className;
        switch (true) {
            case /_labour-coast_\X*/s.test(className) :
                setOption(cost);
                break;
            case /_materials-coast_\X*/s.test(className) :
                setOption(materials);
                break;
            case /_tools-needed_\X*/s.test(className) :
                setOption(tools.join(', '));
                break;
            case /_implemenmtation_\X*/s.test(className) :
                setOption(manual);
                break;
            case /_apply_\X*/s.test(className) :
                setOption(apply);
                break;
            default:
                break;
        }
        setShowInfoOpt(prevState => !prevState);    
    }
    
    const hideInfoOption = (е) => {
        setShowInfoOpt(prevState => !prevState);

    }


    return (
        <div className={styles['main-item-wrapper']}>
                <p className={showInfoOpt ? styles['item-options-info'] : styles['item-options-info-hidden']}>{option}</p>
            <div className={styles['item-image']}>
                <img className={styles['img']} src={plasterImg} alt={type} />
            </div>
            <div className={styles['item-options']}>
                <div className={styles['labour-coast']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faBucket} />

                </div>
                <div className={styles['materials-coast']} onMouseEnter={showInfoOption} onMouseLeave={hideInfoOption}>
                    <FontAwesomeIcon className={styles['icon']} icon={faHandHoldingDollar} />
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
