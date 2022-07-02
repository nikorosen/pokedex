import Image from 'next/image'

export default function CapturedPokemonCard(props) {

    console.log(props.pokemon)

    const data = props.pokemon.pokemon;
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.pokemon;
    const types = data.types.map(i => i.type.name);

    return <tr>
        <td><Image src={img} width="100" height="100"></Image>
        {order}
        {types.map(i => <span key={i}> {i} </span>)}
        </td>
        <td>
            {props.pokemon.nickname}
        </td>
        <td>
            {props.pokemon.capturedDate}
        </td>
        <td>
            {props.pokemon.capturedLevel}
        </td>
    </tr>
}