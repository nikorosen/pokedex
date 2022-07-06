import PokemonCard from './PokemonCard';
import styles from './PokemonCardContainer.module.css'

/**
 * Wrapper component to dynamically generate PokemonCard components
 * @param {data} : Pokemon Object
 */
export default function PokemonCardContainer(props) {

    const data = props.data;

    return <div className={styles.container} style={props.isMobile? {width: '100%'} : props.showDetails ? {width: '72.5%'} : {width: '100%'}}>
        {data.map(i => <PokemonCard key={`${i['url']}${Math.random}`} 
        endpoint={i['url']}
        {...props}
        />)}
    </div>
}