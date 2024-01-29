import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2> <Link to="/" className={styles.logo}>Todo App</Link></h2>
      <ul className={styles.navLinks}>
        <li><Link to="/completed" className={styles.navLink}>Completed</Link></li>
        <li><Link to="/about" className={styles.navLink}>About</Link></li>
        <li><Link to="/contactus" className={styles.navLink}>Contact Us</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
