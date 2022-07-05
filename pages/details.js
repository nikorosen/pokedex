import PokemonDetails from "../components/PokemonDetails";
import CapturePopup from "../components/CapturePopup";


export default function Details(props) {

    return <>

    {props.showPopup ? <CapturePopup
      currentPokemon={props.currentPokemon}
      capturedPokemon={props.capturedPokemon}
      setCapturedPokemon={props.setCapturedPokemon}
      setShowPopup={props.setShowPopup}/> : ''}

    <PokemonDetails
        showPopup={props.showPopup}
        setShowPopup={props.setShowPopup}
        currentPokemon={props.currentPokemon}
        capturedPokemon={props.capturedPokemon}
        setCapturedPokemon={props.setCapturedPokemon} />
    </>
}