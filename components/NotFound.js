import Link from 'next/link'
import styles from './NotFound.module.css'

/**
 * basic 404-page-not-found component
 */
export default function NotFound(props) {
    return <div className={styles.main} >
        <h2>Page not found...</h2> <u><Link href='/'>Go back</Link></u>
        </div>
}