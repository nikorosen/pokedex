import PokemonCard from './PokemonCard';
import Details from './Details';
import {useEffect} from 'react';

export default function PokemonCardContainer(props) {
    
    useEffect(() => {
        console.log('current pokemon: ')
        console.log(props.currentPokemon)
      },[props.currentPokemon])
    
    const pokemon = props.data.results;
    let show = true;

    return <div>
        {props.showDetails ? <Details show={show} currentPokemon={props.currentPokemon}/> : ''}
        {pokemon.map( i => <PokemonCard key={i['url']} setShowDetails={props.setShowDetails} setCurrentPokemon={props.setCurrentPokemon} endpoint={i['url']}/>)}
        
    </div>
}