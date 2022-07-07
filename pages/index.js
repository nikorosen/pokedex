import { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
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
 * @prop {[pokemonList, setPokemonList]} : Array of all fetched Pokemon Objects
 * @prop {[prevPokemonList, setPrevPokemonList]} : Array of Pokemon Objects for use in infinite scrolling logic
 * @prop {[hasMore, setHasMore]} : Bool that tracks fetch progress in the dataset
 */
export default function Home(props) {

  const [prevPokemonList, setPrevPokemonList] = useState([])
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=>{
    setPrevPokemonList(props.data);
    setPokemonList(props.data.results);
  },[])

  /** fetches more data to feed to infinite scroll, 
   *  sets Pokemon state variable
   * */
  const getMore = async () => {

    const newNext = prevPokemonList.next;

    // adjust limit if at the end of data set
    if (OFFSET_MAX - pokemonList.length < DEFAULT_LIMIT){
      const regex = /limit=\d*/;
      newNext = prevPokemonList.next.replace(regex, `limit=${OFFSET_MAX - pokemonList.length}`)
      setHasMore(false);
    }
       
    // if not at the end of data set
    if (OFFSET_MAX - pokemonList.length != 0) {
    const res = await fetch(
      newNext
    ); 

    if (res != null) {
      const newPokemon = await res.json();
      setPrevPokemonList(newPokemon);
  
      setPokemonList(p => {
        console.log(p)
        return [...p, ...newPokemon.results]
      })};}
  }

  return (
    <Layout>
    <div className={styles.main}>
      <Head>
        <title>Pokedex</title>
      </Head>

      {props.showPopup ? <CapturePopup
      {...props}/> : ''}

      <InfiniteScroll
        next={getMore}
        dataLength={pokemonList.length}
        hasMore={hasMore}
        loader={<Image alt="loading" src="/pokeball-loading.gif" height="100" width="100" layout='fixed' objectFit='contain'/>}
        endMessage={<h4>Nothing more to show</h4>}>

      <PokemonCardContainer {...props} data={pokemonList}/>
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
