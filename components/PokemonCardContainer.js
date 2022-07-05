import PokemonCard from './PokemonCard';
import Details from './PokemonDetails';
import { useEffect } from 'react';
import styles from './PokemonCardContainer.module.css'

export default function PokemonCardContainer(props) {

    useEffect(() => {
        console.log('current pokemon: ')
        console.log(props.currentPokemon)
    }, [props.currentPokemon])

    const pokemon = props.data;

    return <div className={styles.container} style={props.isMobile? {width: '100%'} : props.showDetails ? {width: '80%'} : {width: '100%'}}>

        {pokemon.map(i => <PokemonCard key={`${i['url']}${Math.random}`} 
        showDetails={props.showDetails}
        setShowDetails={props.setShowDetails} 
        setCurrentPokemon={props.setCurrentPokemon} 
        endpoint={i['url']}
        isMobile={props.isMobile} />)}

    </div>
}