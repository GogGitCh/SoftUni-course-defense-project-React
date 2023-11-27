import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={styles['navbar-wrapper']}>
            <div className={styles['links']}>
                <Link to={'/'} className={styles['login']} >Home</Link>
                <Link to={'/gallery'} className={styles['login']} >Gallery</Link>
            </div>
            <div className={styles['user-related']}>
                <Link to={'/login'} className={styles['login']} >Log in</Link>
                <Link to={'/register'} className={styles['register']} >Register</Link>
            </div>
        </nav>
    );
}

export default Navbar
