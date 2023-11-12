import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles['navbar-wrapper']}>
            <div className={styles['links']}>
                <a href="">link 1</a>
            </div>
            <div className={styles['user-related']}>
                <a href="">log in</a>

            </div>
        </div>
    )
}

export default Navbar
