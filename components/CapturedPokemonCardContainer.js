import CapturedPokemonCard from './CapturedPokemonCard'
import CapturedPokemonCardWeb from './CapturedPokemonCardWeb'

export default function CapturedPokemonCardContainer(props) {

    return <>
    <ul>
    { props.capturedPokemon.map( i => <CapturedPokemonCard 
        key={`${i.pokemon.order} ' ' ${i.nickname}_${Math.random()}`}
        pokemon={i}/> ) }
    </ul>
    
    <table>
    <thead><tr>
        <th>POKEMON</th>
        <th>NICKNAME</th>
        <th>CAPTURED AT</th>
        <th>CAPTURED LEVEL</th> 
    </tr>
    </thead>
    <tbody>
    { props.capturedPokemon.map( i => <CapturedPokemonCardWeb 
        key={`${i.pokemon.order} ' ' ${i.nickname}_${Math.random()}`}
        pokemon={i}/> )
    }
    </tbody>
    
    </table>
    </>
}