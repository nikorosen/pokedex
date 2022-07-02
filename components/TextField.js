import { useRef } from "react";

/**
 * TextField component to submit and store records of Pokemon captures
 * @param {capturedPokemon} : current database of captured Pokemon
 * @param {setCapturedPokemon} : setter to add new captures
 * @param {currentPokemon} : currently selected Pokemon
 */
export default function TextField(props) {

    const nameRef = useRef();
    const dateRef = useRef();
    const levelRef = useRef();

    // extend on Pokemon object and store in database
    function handleSubmit(e) {
        e.preventDefault();
        
        const newCapturedPokemon = {
            pokemon: props.currentPokemon,
            nickname: nameRef.current.value,
            capturedDate: dateRef.current.value,
            capturedLevel: levelRef.current.value
        }

        props.setCapturedPokemon(props.capturedPokemon.concat(newCapturedPokemon));
        console.log(props.capturedPokemon)
    }

    return <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            id={'nickname'}
            placeholder="Nickname"
            ref={nameRef}/>
        <input 
            type="date" 
            id={'capturedDate'}
            placeholder="Captured Date"
            ref={dateRef}/>
        <input 
            type="text" 
            id={'capturedLevel'}
            placeholder="Captured Level"
            ref={levelRef}/>
        <button type='submit'>Capture</button>
    </form>
}