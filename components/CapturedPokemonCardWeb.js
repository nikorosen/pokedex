import Image from 'next/image'
import styles from './CapturedPokemonCardWeb.module.css'

export default function CapturedPokemonCard(props) {

    const data = props.pokemon;
    const name = data.name;
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.order;
    const types = data.types.map(i => i.type.name);

    return <tr className={styles.main}>
        
        <td className={styles.pokemon}>
        <div className={styles.image} style={{background: styles[types[0]]}}><Image src={img} width="50%" height="50%" layout='responsive' objectfit='contain'/></div>
        <div className={styles.info}><h3>#{order} {name}</h3>
        
        <span className={styles.types}>{types.map((i, index) => <span key={i}> {index != 0 ? <>&nbsp;•</> : '' } {i} </span> )}</span></div>
        
        </td>
        <td>
            {props.pokemon.nickname || <span className={styles.noname}>None</span>}
        </td>
        <td>
            {props.pokemon.capturedDate}
        </td>
        <td>
            {props.pokemon.capturedLevel}
        </td>
    </tr>
}