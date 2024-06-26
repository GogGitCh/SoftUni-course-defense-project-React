
import Path from '../../../paths';
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(
    {
        userPathHandler
    }
) {

    const triggerUserPahtHandler = (userPathHandler) => {
        userPathHandler();
    }

    return (
        <nav className={styles['navbar-wrapper']}>
            <div className={styles['links']}>
                <Link to={Path.Home} className={styles['login']} >Home</Link>
                <Link to={Path.Gallery} className={styles['login']} >Gallery</Link>
                <Link to={Path.MySpace} className={styles['login']} >My space</Link>
                {/* onClick={triggerUserPahtHandler} */}
            </div>
            <div className={styles['user-related']}>
                <Link to={Path.Login} className={styles['login']} >Log in</Link>
                <Link to={Path.Register} className={styles['register']} >Register</Link>
                <Link to={Path.Logout} className={styles['login']}>Log out</Link>
            </div>
        </nav>
    );
}

export default Navbar
