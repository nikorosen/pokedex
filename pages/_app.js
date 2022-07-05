import { useState } from 'react'
import { createContext } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { AppContextProvider } from './AppContext'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  const [currentPokemon, setCurrentPokemon] = useState();
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(determineIsMobile);

  function determineIsMobile() {
    if (typeof window !== "undefined")
      return window.innerWidth <= 768
  }

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }
  
  useEffect(() => {

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return <Component {...pageProps}
      currentPokemon={currentPokemon}
      setCurrentPokemon={setCurrentPokemon}
      capturedPokemon={capturedPokemon}
      setCapturedPokemon={setCapturedPokemon}
      showDetails={showDetails}
      setShowDetails={setShowDetails}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      isMobile={isMobile}
    />

}

export default MyApp
