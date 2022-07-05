import Head from 'next/head'
import CapturedPokemonCardContainer from '../components/CapturedPokemonCardContainer'
import { useEffect } from 'react';

import Layout from '../components/Layout';
import getAllCapturedPokemon from '../util/getAllCapturedPokemon';

export default function Captured(props) {

    // wait until localstorage can be accessed
    useEffect(() => {
        props.setCapturedPokemon(getAllCapturedPokemon())
    }
        , []);

    return <Layout>
        <Head>
            <title>Pokedex</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <CapturedPokemonCardContainer
            capturedPokemon={props.capturedPokemon}
            showPopup={props.showPopup}
            setShowPopup={props.setShowPopup} />
    </Layout>
}