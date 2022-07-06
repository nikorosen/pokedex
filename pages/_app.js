import { useState } from 'react'
import '../styles/globals.css'
import {useEffect} from 'react'

/**
 * App wrapper for init state variables
 * @prop {[currentPokemon, setCurrentPokemon]} : Object that tracks current selection
 * @prop {[prevPokemon, setPrevPokemon]} : Object that tracks last selection
 * @prop {[capturedPokemonList, setCapturedPokemonList]} : Array of Pokemon Objects currently captured Pokemon (stored in localStorage)
 * @prop {[showDetail, setShowDetails]} : Bool that tracks detail display state
 * @prop {[showPopup, setShowPopup]} : Bool that tracks popup display state
 * @prop {[isMobile, setIsMobile]} : Bool that tracks screen size 
 */
function MyApp({ Component, pageProps }) {

  const [currentPokemon, setCurrentPokemon] = useState();
  const [prevPokemon, setPrevPokemon] = useState();
  const [capturedPokemonList, setCapturedPokemonList] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(determineIsMobile);

  /** Determines if screen size is mobile
   * @returns {bool}  
   *  */ 
  function determineIsMobile() {
    if (typeof window !== "undefined")
      return window.innerWidth <= 768
  }
 
  /** when screen size is mobile, update isMobile
  *  */ 
  function handleWindowSizeChange() {
    if (typeof window !== "undefined")
      setIsMobile(window.innerWidth <= 768);
  }
  
  // keep track of screen size 
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return <Component {...pageProps}
      currentPokemon={currentPokemon}
      setCurrentPokemon={setCurrentPokemon}
      prevPokemon={prevPokemon}
      setPrevPokemon={setPrevPokemon}
      capturedPokemonList={capturedPokemonList}
      setCapturedPokemonList={setCapturedPokemonList}
      showDetails={showDetails}
      setShowDetails={setShowDetails}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      isMobile={isMobile}
    />

}

export default MyApp
