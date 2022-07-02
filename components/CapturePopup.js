import TextField from "./TextField";

export default function CapturePopup(props) {
    return <div>
        <h2>Capturing {props.currentPokemon.name}</h2>
        <TextField 
            currentPokemon={props.currentPokemon} 
            capturedPokemon={props.capturedPokemon}
            setCapturedPokemon={props.setCapturedPokemon} />
    </div>
}