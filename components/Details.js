import Image from 'next/image';
import {useEffect} from 'react';

export default function Details(props) {

    useEffect(() => {
        if (props.currentPokemon !== {}) {
            console.log(data)
        }}, [props.currentPokemon]);

    const data = props.currentPokemon;
    const height = data.height;
    const types = data.types.map(i => i.type.name);
    const weight = data.weight;
    const img = data.sprites.other['official-artwork'].front_default;
    const [hp, attack, defense, sattack, sdefense, speed] = data.stats.map(i => i.base_stat);
    

    return <>
        <Image src={img} width="100" height="100"></Image>
        <div><h2>About</h2>
        <tr>
            <th>Types(s):</th> 
            <td>{types.map(i => <> {i} </>)}</td> 
        </tr>
        <tr>
            <th>Weight:</th>
            <td>{weight} kg</td> 
        </tr>
        <tr>
            <th>Height:</th> 
            <td>{height * 0.1} m</td>
        </tr></div>
        <div>
        <h2>Base Stats</h2>
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
        </tr></div>
        <button>Capture</button>
    </>
}