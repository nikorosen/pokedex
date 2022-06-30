import Head from 'next/head';
import Image from 'next/image';

/**
 * Shared layout
 * @param {children}
 */
export default function Layout({ children }) {
  return (
    <>
        <Image alt='logo' src='/pokedex-logo.png' width='100' height='50' layout='fixed'/>
        <main>{children}</main>
    </>
  )
}