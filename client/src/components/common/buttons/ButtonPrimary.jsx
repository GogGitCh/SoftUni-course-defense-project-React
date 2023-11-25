import styles from './ButtonPrimary.module.css'

function ButtonPrimary({
    text,
    type,
}) {
    return (
        <>
            <>
                <button className={styles['primary-btn']} type={type}>
                    <a className={styles['a']} href="">{text}</a>
                </button>
            </>
        </>
    );
}

export default ButtonPrimary


