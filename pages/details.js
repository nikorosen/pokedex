import PokemonDetails from "../components/PokemonDetails";

export default function Details(props) {
    return <>
    <PokemonDetails
        showPopup={props.showPopup}
        setShowPopup={props.setShowPopup}
        currentPokemon={props.currentPokemon}
        capturedPokemon={props.capturedPokemon}
        setCapturedPokemon={props.setCapturedPokemon} />
    </>
}