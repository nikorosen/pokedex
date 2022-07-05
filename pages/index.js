import { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokemonCardContainer from '../components/PokemonCardContainer.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../components/Layout';
import PokemonDetails from '../components/PokemonDetails'
import CapturePopup from '../components/CapturePopup';

export default function Home(props) {

  const defaultLimit = 20;
  const offsetMin = 0;
  const offsetMax = 878;
  const data = props.data;

  const [ prevData, setPrevData ] = useState(data)
  const [ pokemon, setPokemon ] = useState(data.results);
  const [ hasMore, setHasMore] = useState(true);

  const getMore = async () => {

    const regex = /limit=\d*/;
    const newNext = prevData.next;

    if (offsetMax - pokemon.length < defaultLimit){
      newNext = prevData.next.replace(regex, `limit=${offsetMax - pokemon.length}`)
      setHasMore(false);
    }
       
    if (offsetMax - pokemon.length != 0) {
    const res = await fetch(
      newNext
    ); 

    if (res != null) {

      const newPokemon = await res.json();
      setPrevData(newPokemon);
  
      setPokemon(p => {
        console.log(p)
        return [...p, ...newPokemon.results]
      })};}
  }

  return (
    <Layout>
    <div className={styles.main}>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>

      {props.showPopup ? <CapturePopup
      currentPokemon={props.currentPokemon}
      capturedPokemon={props.capturedPokemon}
      setCapturedPokemon={props.setCapturedPokemon}
      setShowPopup={props.setShowPopup}/> : ''}

      <InfiniteScroll
        next={getMore}
        dataLength={pokemon.length}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}>

      <PokemonCardContainer 
      currentPokemon={props.currentPokemon}
      setCurrentPokemon={props.setCurrentPokemon}
      showDetails={props.showDetails}
      setShowDetails={props.setShowDetails}
      showPopup={props.showPopup}
      setShowPopup={props.setShowPopup}
      capturedPokemon={props.capturedPokemon}
      setCapturedPokemon={props.setCapturedPokemon}
      isMobile={props.isMobile}
      data={pokemon}/>
      </InfiniteScroll>

      { (props.showDetails && !props.isMobile) ? <PokemonDetails
        showDetails={props.showDetails}
        setShowDetails={props.setShowDetails}
        showPopup={props.showPopup}
        setShowPopup={props.setShowPopup}
        currentPokemon={props.currentPokemon}
        capturedPokemon={props.capturedPokemon}
        setCapturedPokemon={props.setCapturedPokemon} /> : ''}

    </div>
    </Layout>
  )
}

// this get called on every request
export async function getServerSideProps(context) {
  
  const listEndPoint = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
  const res = await fetch(listEndPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}
