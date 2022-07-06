import PokemonDetails from "../components/PokemonDetails";
import CapturePopup from "../components/CapturePopup";
import NotFound from "../components/NotFound";
import { useEffect } from "react";
import Router from 'next/router'
import Head from 'next/head'

/**
 * Pokemon details page that displays currentPokemon data 
 * (mobile only)
 */
export default function Details(props) {

  useEffect(() => {
    if (!props.isMobile) {
      Router.push('/');
    }
  }, [props.isMobile])

  return <div>
    <Head>
      <title>Pokedex - Details</title>
    </Head>

    {props.showPopup ? <CapturePopup {...props} /> : ''}
    {props.currentPokemon ? <PokemonDetails {...props} /> : <NotFound/>}
  </div>
}
