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

// api fetch constants
const DEFAULT_LIMIT = 20;
const OFFSET_MAX = 878;

/**
 * Home page
 * @param {endpoint} : url that contains information about a single pokemon
 * @param {currentPokemon} : state prop that keeps track of current selection
 * @param {setCurrentPokemon} : state prop that set current selection
 * @param {prevPokemon} : state prop that keeps track of last selection
 * @param {setPrevPokemon} : state prop that sets last selection
 * @param {setShowDetails} : state prop that sets detail display state
 */
export default function Home(props) {

  useEffect(()=>{
    props.setPrevData(props.data);
    props.setPokemon(props.data.results);
  },[])

  /** fetches more data to feed to infinite scroll, 
   *  sets Pokemon state variable
   * */
  const getMore = async () => {

    const newNext = props.prevData.next;

    // adjust limit if at the end of data set
    if (OFFSET_MAX - props.pokemon.length < DEFAULT_LIMIT){
      const regex = /limit=\d*/;
      newNext = props.prevData.next.replace(regex, `limit=${OFFSET_MAX - props.pokemon.length}`)
      setHasMore(false);
    }
       
    // if not at the end of data set
    if (OFFSET_MAX - props.pokemon.length != 0) {
    const res = await fetch(
      newNext
    ); 

    if (res != null) {
      const newPokemon = await res.json();
      props.setPrevData(newPokemon);
  
      props.setPokemon(p => {
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
      {...props}/> : ''}

      <InfiniteScroll
        next={getMore}
        dataLength={props.pokemon.length}
        hasMore={props.hasMore}
        loader={<Image src="/pokeball-loading.gif" height="100" width="100" layout='fixed' objectFit='contain'/>}
        endMessage={<h4>Nothing more to show</h4>}>

      <PokemonCardContainer {...props} data={props.pokemon}/>
      </InfiniteScroll>

      { (props.showDetails && !props.isMobile) ? <PokemonDetails
        {...props} /> : ''}

    </div>
    </Layout>
  )
}

/**  this get called on every request
 * @return : intial Pokemon data set 
*/ 
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
