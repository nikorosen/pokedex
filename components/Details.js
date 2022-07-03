import Image from 'next/image';
import {useEffect} from 'react';
import getAllStorage from '../util/getAllStorage';

export default function Details(props) {

    useEffect(() => {
        if (props.currentPokemon !== {}) {
            console.log(data)
        
            props.setCapturedPokemon(getAllStorage())
            const interval = setInterval(() => {
            props.setCapturedPokemon(getAllStorage())
            }, 5000);

            return () => clearInterval(interval);
        }}, []);

    const data = props.currentPokemon;
    
    const order =  data.order;
    const height = data.height;
    const types = data.types.map(i => i.type.name);
    const weight = data.weight;
    const img = data.sprites.other['official-artwork'].front_default;
    const [hp, attack, defense, sattack, sdefense, speed] = data.stats.map(i => i.base_stat);
    

    return <div>
        <Image src={img} width="100" height="100"></Image>
        <div><h2>About</h2>
        <table>
        <tr>
            <th>Types(s):</th> 
            <td>{types.map(i => <span key={i}> {i} </span>)}</td> 
        </tr>
        <tr>
            <th>Weight:</th>
            <td>{(weight * 0.1).toFixed(1)} kg</td> 
        </tr>
        <tr>
            <th>Height:</th> 
            <td>{(height * 0.1).toFixed(1)} m</td>
        </tr>
        </table></div>
        <div>
        <h2>Base Stats</h2>
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
        </tr></table></div>
        
        { props.capturedPokemon.some( e => e.order == order) ? <><h2>Capture Information</h2>
        <table>
        { props.capturedPokemon.filter(i => i.order == order).map( i => <table>
           { i.nickname != '' ? <tr>
                <th>Nickname: </th>
                <td>{i.nickname}</td> 
            </tr> : '' }
            <tr>
                <th>Captured on: </th>
                <td>{i.capturedDate}</td>
            </tr>
            <tr>
                <th>Captured level: </th>
                <td>{i.capturedLevel}</td>
            </tr>
            </table>) }
        </table></> : ''}
        
        { !props.capturedPokemon.some( e => e.order == order) ? 
        <button onClick={e => props.setShowPopup(!props.showPopup)}>Capture</button> : '' }
    </div>
}