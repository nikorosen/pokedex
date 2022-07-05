import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/Link';
import styles from '../styles/Layout.module.css'

/**
 * Shared layout
 * @param {children}
 */
export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <header>
        <Link href='/'><span className={styles.logo}><Image alt='logo' src='/pokedex-logo.png' width="180%" height="100%"  layout='fixed' objectFit='contain'/></span></Link>
        <Link href='/captured'><span className={styles.captured}><Image alt='captured pokemon' src='/pokeball.png' width="100%" height="100%"  layout='responsive' objectFit='contain'/></span></Link>
        <Link href='/captured'><button className={styles['captured-desktop']}><Image alt='captured pokemon' src='/pokeball.png' width="25%" height="25%"  layout='fixed' objectFit='contain'/> Captured Pokemon</button></Link>
      </header>
      <main>{children}</main>
        
    </div>
  )
}