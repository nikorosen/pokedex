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

    return <div className={styles.container}>
        {/* {props.showDetails ? <Details
            showPopup={props.showPopup}
            setShowPopup={props.setShowPopup}
            currentPokemon={props.currentPokemon}
            capturedPokemon={props.capturedPokemon}
            setCapturedPokemon={props.setCapturedPokemon} /> : ''} */}
        {pokemon.map(i => <PokemonCard key={`${i['url']}${Math.random}`} 
        setShowDetails={props.setShowDetails} 
        setCurrentPokemon={props.setCurrentPokemon} 
        endpoint={i['url']} />)}

    </div>
}