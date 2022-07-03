import Image from 'next/image'

export default function CapturedPokemonCard(props) {

    //console.log(props.pokemon)

    const data = props.pokemon;
    const img = data.sprites.other['official-artwork'].front_default;
    const order = data.pokemon;
    const types = data.types.map(i => i.type.name);

    return <li>
        <li><Image src={img} width="100" height="100"></Image></li>
        <li>
            <b>{props.pokemon.nickname}</b>
        </li>
        <li>
            Captured on {props.pokemon.capturedDate}
        </li>
        <li>
            Captured Level: {props.pokemon.capturedLevel}
        </li>
    </li>
}