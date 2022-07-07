import Image from 'next/image'
import styles from './CapturedPokemonCard.module.css'

/**
 * Card component to display captured Pokemon data
 * (Mobile only)
 * @param {pokemon} : a capturedPokemon Object
 */
export default function CapturedPokemonCard(props) {

    const data = props.capturedPokemon;
    const img = data.sprites.other['official-artwork'].front_default;
    const types = data.types.map(i => i.type.name);
    const name = data.name;
    const nickname = data.nickname;
    const capturedDate = data.capturedDate;
    const capturedLevel = data.capturedLevel;

    return <li className={styles.main}>
        <li className={styles.image} style={{ background: styles[types[0]] }}>
            <Image alt={name} src={img} width="100" height="100" layout='responsive' objectFit='contain' />
        </li>
        <li className={styles.info}><ul>
            <li className={styles.name}>
                <b>{nickname || name}</b>
            </li>
            <li>
                Captured on: {capturedDate}
            </li>
            <li>
                Captured Level: {capturedLevel}
            </li>
        </ul></li>
    </li>
}