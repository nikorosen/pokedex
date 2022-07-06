import CapturedPokemonCard from './CapturedPokemonCard'
import CapturedPokemonCardWeb from './CapturedPokemonCardWeb'
import styles from './CapturedPokemonCardContainer.module.css'

/**
 * Wrapper component to dynamically generate CapturedPokemonCard components
 * @param {capturedPokemon} : list of capturedPokemon Objects
 */
export default function CapturedPokemonCardContainer(props) {
    return <div className={styles.main}>
        <h2>Captured Pokemon</h2>
        <ul>
            {props.capturedPokemonList.map(i => <CapturedPokemonCard
                key={`${i.order} ' ' ${i.nickname}_${Math.random()}`}
                capturedPokemon={i} />)}
        </ul>

        <table className={styles.desktop}>
            <thead>
                <tr>
                    <th>POKEMON</th>
                    <th>NICKNAME</th>
                    <th>CAPTURED AT</th>
                    <th>CAPTURED LEVEL</th>
                </tr>
            </thead>
            <tbody>
                {props.capturedPokemonList.map(i => <CapturedPokemonCardWeb
                    key={`${i.order} ' ' ${i.nickname}_${Math.random()}`}
                    capturedPokemon={i} />)
                }
            </tbody>
        </table>
    </div>
}