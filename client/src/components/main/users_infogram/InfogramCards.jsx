import { useState } from 'react';
// import InfogramModal from '../../common/modals/InfogramModal';
import styles from './infogramCards.module.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function InfogramCards() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles['infogram-wrapper']}>
            <section className={styles['infogram-text']} >
                <h3 className={styles['h3']} >Learn more about how it works by chosing your role/position and exploring the others</h3>
            </section>
            <section className={styles['infogram-cards']} >

                <ul className={styles['ul']}>

                    <Button as={'li'} className={styles['li']} variant="info" onClick={handleShow}>
                        <p className={styles['p']}>Master</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image1_1.jpg" />
                    </Button>

                    <Button as={'li'} className={styles['li']} variant="info" onClick={handleShow}>
                        <p className={styles['p']}>Apprentice</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image2_2.jpg" />
                    </Button>

                    <Button as={'li'} className={styles['li']} variant="info" onClick={handleShow}>
                        <p className={styles['p']}>Client</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image3_3.jpg" />
                    </Button>

                    <Button as={'li'} className={styles['li']} variant="info" onClick={handleShow}>
                        <p className={styles['p']}>Preparer</p>
                        <img className={styles['img']} src="../../../public/images/infogram_cards/Image4_4.jpg" />
                    </Button>
                </ul>

            </section>
            {show && (
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default InfogramCards;
