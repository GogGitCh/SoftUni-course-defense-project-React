import styles from './ButtonPrimary.module.css'

function ButtonPrimary({text}) {
    return (
        <>
            <button className={styles['primary-btn']}>
                <a className={styles['a']} href="">{text}</a>
            </button>
        </>
    );
}

export default ButtonPrimary


