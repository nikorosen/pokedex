import PokemonDetails from "../components/PokemonDetails";
import CapturePopup from "../components/CapturePopup";
import { useEffect } from "react";
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'


export default function Details(props) {

  useEffect(() => {

    /*       if (typeof window !== 'undefined') {
            const pokemon = JSON.parse(localStorage.getItem('currentPokemon'));
            console.log(pokemon)
            console.log(props.currentPokemon)
            
            if (props.currentPokemon == {}) {
              props.setCurrentPokemon(pokemon);
              console.log('just set the bugga')
              console.log(props.currentPokemon)
            }
    
            
          } */

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
