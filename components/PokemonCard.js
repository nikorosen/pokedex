import useSWR from 'swr';
import Image from 'next/image';
import styles from './PokemonCard.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PokemonCard(props) {

    function handleClick() {
        props.setCurrentPokemon(data)
        props.setShowDetails(true)
    }

    const {data, error} = useSWR(props.endpoint, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const types = data.types.map(i => i.type.name);
    const img = data.sprites.other['official-artwork'].front_default;

    return <div className={styles.card} onClick={handleClick}>
        <Image src={img} width="100" height="100"></Image>
        <h2>#{data.order} {data.name}</h2>
        {types.map(i => <li>{i}</li>)} 
    </div>
}