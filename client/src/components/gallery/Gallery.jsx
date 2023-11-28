import { useEffect, useState } from 'react';

import GalleryCardItem from './GalleryCardItem';

import styles from './Gallery.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    const [plasters, setPlasters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/plasters', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((resolved) => {
                setPlasters(resolved)
                console.log(resolved)
                console.log(plasters)
            });
    }, []);

    const galleryCardItemDOM = plasters.map(plaster => <GalleryCardItem key={plaster._id} {...plaster} />)

    return (
        <div className={styles['main-gallery-wrapper']}>

            <div className={styles['types-gallery-wrapper']}>
                <p className={styles['type']}>
                    Gallery
                </p>
                <div className={styles['styles-row']}>
                    <button className={styles['arrow-button-left']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronLeft} />
                    </button>
                    <ul className={styles['style']} >
                        <li className={styles['gallery-card']}>
                            {galleryCardItemDOM}
                        </li>
                    </ul>
                    <button className={styles['arrow-button-right']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronRight} />
                    </button>
                </div>
            </div>

            {/* <div className={styles['types-gallery-wrapper']}>
                <p className={styles['type']}>
                    Stype 2
                </p>
                <div className={styles['styles-row']}>
                    <button className={styles['arrow-button-left']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronLeft} />
                    </button>
                    <ul className={styles['style']} >
                        <li className={styles['gallery-card']}>
                            <GalleryCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <GalleryCardItem />
                        </li>
                        <li className={styles['gallery-card']}>
                            <GalleryCardItem />
                        </li>
                    </ul>
                    <button className={styles['arrow-button-right']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronRight} />
                    </button>
                </div>
            </div>

            <div className={styles['types-gallery-wrapper']}>
                <p className={styles['type']}>
                    Stype 2
                </p>
                <div className={styles['styles-row']}>
                    <button className={styles['arrow-button-left']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronLeft} />
                    </button>
                    <ul className={styles['style']} >
                        <li className={styles['gallery-card']}>
                            <GalleryCardItem />
                        </li>
                    </ul>
                    <button className={styles['arrow-button-right']}>
                        <FontAwesomeIcon className={styles['button-icon']} icon={faChevronRight} />
                    </button>
                </div>
            </div> */}


        </div>
    );
}

export default Gallery
