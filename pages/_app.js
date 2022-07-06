import { useState } from 'react'
import '../styles/globals.css'
import {useEffect} from 'react'

/**
 * App wrapper for init state variables
 * @param {endpoint} : url that contains information about a single pokemon
 * @param {currentPokemon} : state prop that keeps track of current selection
 * @param {setCurrentPokemon} : state prop that set current selection
 * @param {prevPokemon} : state prop that keeps track of last selection
 * @param {setPrevPokemon} : state prop that sets last selection
 * @param {setShowDetails} : state prop that sets detail display state
 */
function MyApp({ Component, pageProps }) {

  const [currentPokemon, setCurrentPokemon] = useState();
  const [prevPokemon, setPrevPokemon] = useState();
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(determineIsMobile);
  const [prevData, setPrevData] = useState([])
  const [pokemon, setPokemon] = useState([]);
  const [hasMore, setHasMore] = useState(true);

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
      capturedPokemon={capturedPokemon}
      setCapturedPokemon={setCapturedPokemon}
      showDetails={showDetails}
      setShowDetails={setShowDetails}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      isMobile={isMobile}
      prevData={prevData}
      setPrevData={setPrevData}
      pokemon={pokemon}
      setPokemon={setPokemon}
      hasMore={hasMore}
      setHasMore={setHasMore}
    />

}

export default MyApp
