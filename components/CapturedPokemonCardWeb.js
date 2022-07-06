import Image from 'next/image'
import styles from './CapturedPokemonCardWeb.module.css'
import Types from './Types';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

export default function CapturedPokemonCard(props) {

    const data = props.pokemon;
    const name = capitalizeFirstLetter(data.name);
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.order;
    const types = data.types.map(i => i.type.name);
    const nickname = props.pokemon.nickname;
    const capturedDate = props.pokemon.capturedDate;
    const capturedLevel = props.pokemon.capturedLevel;

    return <tr className={styles.main}>

        <td className={styles.pokemon}>
            <div className={styles.image} style={{ background: styles[types[0]] }}>
                <Image src={img} width="50%" height="50%" layout='responsive' objectfit='contain' />
            </div>
            <div className={styles.info}>
                <h3>#{String(order).padStart(3, '0')} {name}</h3>
                <Types types={types} /></div>
        </td>
        <td>
            {nickname || <span className={styles.noname}>None</span>}
        </td>
        <td>
            {capturedDate}
        </td>
        <td>
            {capturedLevel}
        </td>
    </tr>
}