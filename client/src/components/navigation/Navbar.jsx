import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles['navbar-wrapper']}>
            <div className={styles['links']}>
                <a className={styles['link_1']} href="">link 1</a>
                <a className={styles['link_2']} href="">link 2</a>
                <a className={styles['link_3']} href="">link 3</a>
            </div>
            <div className={styles['user-related']}>
                <a className={styles['login']} href="">Log in</a>
                <a className={styles['register']} href="">Register</a>
            </div>
        </nav>
    );
}

export default Navbar
