import { useState } from 'react';
import InfogramModal from '../../common/modals/InfogramModal';
import styles from './infogramCards.module.css'


function InfogramCards() {
    const [showModal, setShowModal] = useState(false);


    const showMoreHandler = () => setShowModal(true)
    // const closeMoreHandler = () => setShowModal(false)

    return (
        <div className={styles['infogram-wrapper']}>
            <section className={styles['infogram-text']} >
                <h3 className={styles['h3']} >Learn more about how it works by chosing your role/position and exploring the others</h3>
            </section>
            <section className={styles['infogram-cards']} >
                {/* <div className={styles['infogram-cards-wrapper']}> */}
                <ul className={styles['ul']}>

                    <li className={styles['li']} onClick={showMoreHandler}>
                        <p className={styles['p']}>Master</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image1_1.jpg" />
                    </li>
                    <li className={styles['li']}>
                        <p className={styles['p']}>Apprentice</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image2_2.jpg" />
                    </li>

                    <li className={styles['li']}>
                        <p className={styles['p']}>Client</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image3_3.jpg" />
                    </li>

                    <li className={styles['li']}>
                        <p className={styles['p']}>Preparer</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image4_4.jpg" />
                    </li>
                </ul>
                {/* </div> */}
            </section>
                    {showModal && <InfogramModal/>}
        </div>
    );
}

export default InfogramCards;
