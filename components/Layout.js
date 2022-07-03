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
        <Link href='/'><span className={styles.logo}><Image alt='logo' src='/pokedex-logo.png' width="100%" height="20%"  layout='responsive' objectFit='contain'/></span></Link>
        <Link href='/captured'>Captured Pokemon</Link>
        <main>{children}</main>
        
    </div>
  )
}