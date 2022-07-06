import Head from 'next/head'
import CapturedPokemonCardContainer from '../components/CapturedPokemonCardContainer'
import { useEffect } from 'react';
import Layout from '../components/Layout';
import getAllCapturedPokemon from '../util/getAllCapturedPokemon';
import styles from '../styles/Captured.module.css'

/**
 * Captured page that displays all currently capturedPokemon Objects
 * (Mobile and Desktop)
 */
export default function Captured(props) {

    // wait until localstorage can be accessed
    useEffect(() => {
        props.setCapturedPokemonList(getAllCapturedPokemon())
    }
        , []);

    return <Layout>
        <div className={styles.main}>
        <Head>
            <title>Pokedex - Captured</title>
        </Head>
        <CapturedPokemonCardContainer {...props} />
        </div>
    </Layout>
}