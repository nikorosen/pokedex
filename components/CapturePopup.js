import { useRef } from "react";
import styles from './CapturePopup.module.css'
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";

/**
 * Form component to submit and store new capturedPokemon objects
 */
export default function CapturePopup(props) {

    const nameRef = useRef();
    const levelRef = useRef();

    // extend on Pokemon Object and store in localStorage
    function handleSubmit(e) {
        e.preventDefault();

        const localStorageKey = 'capturedPokemonList';

        const capturedInfo = {
            nickname: nameRef.current.value,
            capturedDate: dateString,
            capturedLevel: levelRef.current.value
        }

        const newCapturedPokemon = [{ ...props.currentPokemon, ...capturedInfo }]

        // determine if localStorage is empty first
        if (JSON.parse(localStorage.getItem(localStorageKey) != null)) {
            window.localStorage.setItem(localStorageKey, JSON.stringify([...JSON.parse(localStorage.getItem(localStorageKey)), ...newCapturedPokemon]))
        }
        else {
            window.localStorage.setItem(localStorageKey, [JSON.stringify(newCapturedPokemon)]);
        }

        props.setShowPopup(false);
    }

    const name = props.currentPokemon.name;
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const dateString = `${month}/${day}/${year}`

    return <div className={styles.lightbox}>
        <div className={styles.main}>
            <div className={styles.back}><span onClick={e => props.setShowPopup(false)}>🞮</span> </div>

            <h2>Capturing {capitalizeFirstLetter(name)}</h2>
            <p>{`Today's Date: ${dateString}`}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id={'nickname'}
                    placeholder="Nickname"
                    maxlength="16"
                    ref={nameRef} />
                <input
                    type="number"
                    min='1'
                    max='100'
                    id={'capturedLevel'}
                    placeholder="Captured Level"
                    ref={levelRef}
                    required />
                    
                <button className={styles.btn} type='submit'>Capture</button>
            </form>
        </div>
    </div>
}