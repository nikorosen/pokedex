import Image from 'next/image'
import styles from './CapturedPokemonCard.module.css'

export default function CapturedPokemonCard(props) {

    //console.log(props.pokemon)

    const data = props.pokemon;
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.pokemon;
    const types = data.types.map(i => i.type.name);

    return <li className={styles.main}>
        <li className={styles.image} style={{background: styles[types[0]]}}><Image src={img} width="100" height="100" layout='responsive' objectFit='contain'></Image></li>
        <li  className={styles.info}><ul>
        <li className={styles.name}>
            <b>{props.pokemon.nickname || props.pokemon.name}</b>
        </li>
        <li>
            Captured on: {props.pokemon.capturedDate}
        </li>
        <li>
            Captured Level: {props.pokemon.capturedLevel}
        </li>
        </ul></li>
    </li>
}