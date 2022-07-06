import capitalizeFirstLetter from '../util/capitalizeFirstLetter';
import styles from './Types.module.css'

/**
 * Utility component to map and output pokemon types
 * @param {types} : type array  
 */
export default function Types(props) {
    return <div className={styles.types}>
        {props.types.map((i, index) => <span key={i}> {index != 0 ? <>&nbsp;•</> : ''} {capitalizeFirstLetter(i)} </span>)}
    </div>
}