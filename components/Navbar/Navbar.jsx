import Link from 'next/link'
import styles from './Navbar.module.css'

const NavbarMenu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}><Link href="/"><a>NextJS Workshop</a></Link></div>
      <div className={styles.links}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/users/"><a>Users</a></Link>
        <Link href="/about-us/"><a>About Us</a></Link>
        <Link href="/contact-us/"><a>Contact Us</a></Link>
      </div>
    </nav>
  )
}

export default NavbarMenu
