import CapturedPokemonCard from './CapturedPokemonCard'
import CapturedPokemonCardWeb from './CapturedPokemonCardWeb'
import styles from './CapturedPokemonCardContainer.module.css'

export default function CapturedPokemonCardContainer(props) {
    return <div className={styles.main}>
        <ul>
            {props.capturedPokemon.map(i => <CapturedPokemonCard
                key={`${i.order} ' ' ${i.nickname}_${Math.random()}`}
                pokemon={i} />)}
        </ul>

        <table className={styles.desktop}>
            <thead><tr>
                <th>POKEMON</th>
                <th>NICKNAME</th>
                <th>CAPTURED AT</th>
                <th>CAPTURED LEVEL</th>
            </tr>
            </thead>
            <tbody>
                {props.capturedPokemon.map(i => <CapturedPokemonCardWeb
                    key={`${i.order} ' ' ${i.nickname}_${Math.random()}`}
                    pokemon={i} />)
                }
            </tbody>
        </table>
    </div>
}