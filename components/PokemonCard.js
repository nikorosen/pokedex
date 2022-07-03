import useSWR from 'swr';
import Image from 'next/image';
import styles from './PokemonCard.module.css'
import Router, { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PokemonCard(props) {

    function handleClick() {
        props.setCurrentPokemon(data)
        Router.push('/details')
    }

    const {data, error} = useSWR(props.endpoint, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const types = data.types.map(i => i.type.name);
    const img = data.sprites.other['official-artwork'].front_default;

    console.log(types)

    return <div className={styles.card} onClick={handleClick}>
        <div className={styles['card-img']} style={{background: styles[types[0]]}}><Image src={img} width="100" height="100"></Image></div>
        <h2>#{data.order} {data.name}</h2>
        <span className={styles['types']}>{types.map((i, index) => <span key={i}> {index != 0 ? <>&nbsp;•</> : '' } {i} </span> )}</span>
    </div>
}