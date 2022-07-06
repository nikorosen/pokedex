import NotFound from "../components/NotFound"
import Head from "next/head"

/**
 * Basic 404 page
 */
export default function notFound() {
    return <>
        <Head>
            <title>Pokedex - Details</title>
        </Head>
        <NotFound />
    </>
}