import Link from 'next/link'

/**
 * basic 404-page-not-found component
 */
export default function NotFound(props) {
    return <div style={{ display: 'flex', flexFlow: 'column wrap', height: '100vh', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
        Page not found... <u><Link href='/'>Go back</Link></u>
        </div>
}