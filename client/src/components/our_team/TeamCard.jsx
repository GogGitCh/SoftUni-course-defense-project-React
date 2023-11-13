import styles from './TeamCard.module.css'
import ButtonPrimary from '../common/buttons/ButtonPrimary';
import Dash from '../common/decorations/Dash';


function TeamCard() {
    return (
        <div className={styles['team-card-wrapper']} >

            <section className={styles['team-card-text']} >
                <h3 className={styles['h3']}>Core Team</h3>
            </section>

            <div className={styles['team-card-card-wrapper']}>
                <section className={styles['team-card-card']}>
                    <img className={styles['img']} src="/images/team/team-01.png" alt="Team member 1" />
                    <Dash />
                    <h2 className={styles['h2']} >Masters</h2>
                    <p className={styles['p']} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem ratione.</p>
                    <ButtonPrimary text={'Join the Masters team'} />
                </section>
                <section className={styles['team-card-card']}>
                    <img className={styles['img']} src="/images/team/team-03.png" alt="Team member 1" />
                    <Dash />
                    <h2 className={styles['h2']} >Logistics</h2>
                    <p className={styles['p']} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem ratione.</p>
                    <ButtonPrimary text={'Join the Logistic team'} />
                </section>
                <section className={styles['team-card-card']}>
                    <img className={styles['img']} src="/images/team/team-02.png" alt="Team member 1" />
                    <Dash />
                    <h2 className={styles['h2']} >Administration</h2>
                    <p className={styles['p']} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem ratione.</p>
                    <ButtonPrimary text={'Join the Admins team'} />
                </section>
            </div>
        </div>
    );
}

export default TeamCard
