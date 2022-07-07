import Image from 'next/image';
import styles from './PokemonDetails.module.css'
import Types from './Types';
import { useEffect } from 'react';
import Router from 'next/router';
import getAllCapturedPokemon from '../util/getAllCapturedPokemon';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

/**
 * Table component to display currentPokemon data
 * (Mobile and Desktop)
 * @param {data} : Pokemon Object
 */
export default function Details(props) {

    // TODO
    // Some issues with populating initial data, 
    // this works but is pretty inefficient as updates occurs every second
    useEffect(() => {
        props.setCapturedPokemonList(getAllCapturedPokemon())

        const interval = setInterval(() => {
            props.setCapturedPokemonList(getAllCapturedPokemon())
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    // Handle click event depending on screensize
    function handleClick(e) {
        if (props.isMobile) {
            Router.push('/')
        }
        else {
            /* TODO: fun slide out animation on setShowDetails(false)
             e.target.parentElement.parentElement.classList.toggle(styles['slide-out']) */

            props.setShowDetails(!props.showDetails)
        }
    }

    const data = props.currentPokemon;

    const order = data.order;
    const name = capitalizeFirstLetter(data.name);
    const height = (data.height * 0.1).toFixed(1);
    const weight = (data.weight * 0.1).toFixed(1);
    const types = data.types.map(i => i.type.name);
    const img = data.sprites.other['official-artwork'].front_default;
    const [hp, attack, defense, sattack, sdefense, speed] = data.stats.map(i => i.base_stat);

    return <div className={styles.main}>
        <div className={styles.image} style={{ background: styles[types[0]] }}>
            <a className={styles.back} onClick={e => handleClick(e)}> {props.isMobile ? <>🡄</> : <>🡆</>} </a>
            <Image alt={name} src={img} width="100" height="100"></Image>
            <h2>#{String(order).padStart(3, '0')} {name}</h2>{ }
        </div>

        <div className={styles.about}><h3>About</h3>
            <table>
                <tbody>
                <tr>
                    <th>Types(s):</th>
                    <td><Types types={types} /></td>
                </tr>
                <tr>
                    <th>Weight:</th>
                    <td>{weight} kg</td>
                </tr>
                <tr>
                    <th>Height:</th>
                    <td>{height} m</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={styles.stats}>
            <h3>Base Stats</h3>
            <table>
                <tr>
                    <th>HP:</th>
                    <td> {hp}</td>
                </tr>

                <tr>
                    <th>Attack:</th>
                    <td> {attack}</td>
                </tr>
                <tr>
                    <th>Defense:</th>
                    <td> {defense}</td>
                </tr>
                <tr>
                    <th>Special Attack:</th>
                    <td> {sattack}</td>
                </tr>
                <tr>
                    <th>Special Defense:</th>
                    <td> {sdefense}</td>
                </tr>
                <tr>
                    <th>Speed:</th>
                    <td> {speed}</td>
                </tr>
            </table>
        </div>

        {/* If captured, display capture info, else display captured button */}
        {props.capturedPokemonList.some(e => e.order == order) ?
            <div className={styles.about}>
                <h3>Capture Information</h3>
                <table>
                    {props.capturedPokemonList.filter(i => i.order == order).map(i => <table key={i}>
                        {i.nickname != '' ? <tr>
                            <th>Nickname: </th>
                            <td>{i.nickname}</td>
                        </tr> : ''}
                        <tr>
                            <th>Captured on: </th>
                            <td>{i.capturedDate}</td>
                        </tr>
                        <tr>
                            <th>Captured level: </th>
                            <td>{i.capturedLevel}</td>
                        </tr>
                    </table>)}
                </table>
            </div>
            : <button className={styles.btn} onClick={e => props.setShowPopup(!props.showPopup)}>
                Capture
            </button>}
    </div>
}