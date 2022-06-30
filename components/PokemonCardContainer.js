import PokemonCard from './PokemonCard';

export default function PokemonCardContainer(props) {
    console.log(props.data);
    const pokemon = props.data.results;

    return <div>
        {pokemon.map( i => <PokemonCard endpoint={i['url']}/>)}
    </div>
}