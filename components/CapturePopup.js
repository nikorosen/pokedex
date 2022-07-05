import { useRef } from "react";
import styles from './CapturePopup.module.css'

/**
 * TextField component to submit and store records of Pokemon captures
 * @param {capturedPokemon} : current database of captured Pokemon
 * @param {setCapturedPokemon} : setter to add new captures
 * @param {currentPokemon} : currently selected Pokemon
 */
export default function CapturePopup(props) {

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

        const newCapturedPokemon = [{ ...props.currentPokemon, ...capturedInfo }]
        
        
        if ( JSON.parse(localStorage.getItem('pokemon') != null)) {
            console.log('locac')
            console.log(JSON.parse(localStorage.getItem('pokemon')))
            window.localStorage.setItem('pokemon', JSON.stringify([...JSON.parse(localStorage.getItem('pokemon')), ...newCapturedPokemon]))
        }
        else {
            console.log('pokemon was null');
            window.localStorage.setItem('pokemon', [JSON.stringify(newCapturedPokemon)]);
            console.log(JSON.parse(localStorage.getItem('pokemon')))
        }

        //console.log([...JSON.parse(localStorage.getItem('pokemon'))])

        //window.localStorage.setItem(newCapturedPokemon.name, JSON.stringify(newCapturedPokemon));
        props.setShowPopup(false);
    }

    return <div className={styles.lightbox}>
    <div className={styles.main}>
    <div className={styles.back}><span onClick={e => props.setShowPopup(false)}>🞮</span> </div>
    
    <h2>Capturing {props.currentPokemon.name}</h2>
    <form onSubmit={handleSubmit}>
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
            type="number"
            min='1'
            max='100'
            id={'capturedLevel'}
            placeholder="Captured Level"
            ref={levelRef} 
            required/>
        <button className={styles.btn} type='submit'>Capture</button>
    </form>
    </div>
    </div>
}