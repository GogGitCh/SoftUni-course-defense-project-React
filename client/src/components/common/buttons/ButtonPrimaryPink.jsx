import styles from './ButtonPrimaryPink.module.css'

function ButtonPrimaryPink({
    text,
    type,

}) {
    return (
        <>
            <button className={styles['primary-btn']} type={type}>
                <a className={styles['a']} href="">{text}</a>
            </button>
        </>
    );
}

export default ButtonPrimaryPink


