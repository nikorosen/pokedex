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

        const capturedInfo = {
            nickname: nameRef.current.value,
            capturedDate: dateRef.current.value,
            capturedLevel: levelRef.current.value
        }

        const newCapturedPokemon = { ...props.currentPokemon, ...capturedInfo }

        window.localStorage.setItem(newCapturedPokemon.name, JSON.stringify(newCapturedPokemon));
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            id={'nickname'}
            placeholder="Nickname"
            ref={nameRef} />
        <input
            type="date"
            id={'capturedDate'}
            placeholder="Captured Date"
            ref={dateRef} 
            required/>
        <input
            type="text"
            id={'capturedLevel'}
            placeholder="Captured Level"
            ref={levelRef} 
            required/>
        <button type='submit'>Capture</button>
    </form>
}