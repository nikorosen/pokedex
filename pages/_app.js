import { useState } from 'react'
import { createContext } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { AppContextProvider } from './AppContext'

function MyApp({ Component, pageProps }) {

  const [currentPokemon, setCurrentPokemon] = useState({});
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return <Component {...pageProps}
      currentPokemon={currentPokemon}
      setCurrentPokemon={setCurrentPokemon}
      capturedPokemon={capturedPokemon}
      setCapturedPokemon={setCapturedPokemon}
      showDetails={showDetails}
      setShowDetails={setShowDetails}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
    />

}

export default MyApp
