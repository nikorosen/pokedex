import PokemonDetails from "../components/PokemonDetails";
import CapturePopup from "../components/CapturePopup";
import {useEffect} from 'react';
import getAllStorage from '../util/getAllStorage';

export default function Details(props) {
    useEffect(() => {
        
        props.setCapturedPokemon(getAllStorage())
        const interval = setInterval(() => {
        props.setCapturedPokemon(getAllStorage())
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
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