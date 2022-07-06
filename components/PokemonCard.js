import Image from 'next/image';
import Router from 'next/router';
import useSWR from 'swr';
import Types from './Types';
import styles from './PokemonCard.module.css'
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

// fetch utility
const fetcher = (...args) => fetch(...args).then((res) => res.json());

/**
 * Card component to fetch and display Pokemon information
 * @param {endpoint} : url that directs to a Pokemon Object
 */
export default function PokemonCard(props) {

    /**
    * handle the logic when a PokemonCard component is clicked
    * @param {e} : click event
    */
    function handleClick(e) {

        // keep track of previous selection and update active selection styling
        if (props.prevPokemon) {
            document.getElementById(props.prevPokemon.order).classList.toggle(styles.active);
            console.log(props.prevPokemon)
        }

        document.getElementById(data.order).classList.toggle(styles.active);
        props.setPrevPokemon(data)

        // if mobile, route it to details page
        // if desktop, display details on index.js
        if (props.isMobile) {
            props.setCurrentPokemon(data)
            Router.push('/details')
        }
        else {
            if (typeof window !== 'undefined')
                localStorage.setItem('currentPokemon', JSON.stringify(data));

            props.setShowDetails(true)
            props.setCurrentPokemon(data)
        }
    }

    // fetch data from endpoint
    const { data, error } = useSWR(props.endpoint, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <></>

    const order = data.order;
    const name = capitalizeFirstLetter(data.name);
    const types = data.types.map(i => i.type.name);
    const img = data.sprites.other['official-artwork'].front_default;

    return <div id={order} className={styles.main} style={props.isMobile ? { width: '45%' } : props.showDetails ? { width: '25%' } : { width: '20%' }} onClick={e => handleClick(e)}>
        
        <div className={styles.image} style={{ background: styles[types[0]] }}>
            <Image src={img} width="100" height="100"/>
        </div>
        
        <h2>#{String(order).padStart(3, '0')} {name}</h2>
        <Types types={types}/>
    </div>
}

