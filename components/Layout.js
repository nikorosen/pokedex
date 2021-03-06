import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css'

/**
 * Shared layout component
 */
export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
      <link rel="icon" href="/pokeball.png" />
      </Head>
      <header>
        <Link href='/'><span className={styles.logo}><Image alt='logo' src='/pokedex-logo.png' width="180%" height="100%"  layout='fixed' objectFit='contain'/></span></Link>
        <Link href='/captured'><span className={styles.captured}><Image alt='captured pokemon' src='/pokeball.png' width="100%" height="100%"  layout='responsive' objectFit='contain'/></span></Link>
        <Link href='/captured'><button className={styles['captured-desktop']}><Image alt='captured pokemon' src='/pokeball.png' width="25%" height="25%"  layout='fixed' objectFit='contain'/> Captured Pokemon</button></Link>
      </header>
      <main>{children}</main>
    </div>
  )
}