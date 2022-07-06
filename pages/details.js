import PokemonDetails from "../components/PokemonDetails";
import CapturePopup from "../components/CapturePopup";
import { useEffect } from "react";
import Router from 'next/router'
import Link from 'next/link'
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

  function handleNotFound() {
    return <div style={{ display: 'flex', flexFlow: 'column wrap', height: '100vh', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>Page not found... <u><Link href='/'>Go back</Link></u></div>
  }

  return <div>
    <Head>
      <title>Pokedex - Details</title>
    </Head>

    {props.showPopup ? <CapturePopup {...props} /> : ''}
    {props.currentPokemon ? <PokemonDetails {...props} /> : handleNotFound()}
  </div>
}
