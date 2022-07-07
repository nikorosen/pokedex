import Image from 'next/image'
import styles from './CapturedPokemonCardWeb.module.css'
import Types from './Types';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

/**
 * Card component to display captured Pokemon data
 * (Desktop only)
 * @param {pokemon} : a capturedPokemon Object
 */
export default function CapturedPokemonCardWeb(props) {

    const data = props.capturedPokemon;
    const name = capitalizeFirstLetter(data.name);
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.order;
    const types = data.types.map(i => i.type.name);
    const nickname = data.nickname;
    const capturedDate = data.capturedDate;
    const capturedLevel = data.capturedLevel;

    return <tr className={styles.main}>

        <td className={styles.pokemon}>
            <div className={styles.image} style={{ background: styles[types[0]] }}>
                <Image alt={name} src={img} width="50%" height="50%" layout='responsive' objectfit='contain' />
            </div>
            <div className={styles.info}>
                <h3>#{String(order).padStart(3, '0')} {name}</h3>
                <span className={styles.types}><Types types={types} /></span></div>
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