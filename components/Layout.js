import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/Link';

/**
 * Shared layout
 * @param {children}
 */
export default function Layout({ children }) {
  return (
    <>
        <Link href='/'><Image alt='logo' src='/pokedex-logo.png' width='100' height='50' layout='fixed'/></Link>
        <Link href='/captured'>Captured Pokemon</Link>
        <main>{children}</main>
        
    </>
  )
}