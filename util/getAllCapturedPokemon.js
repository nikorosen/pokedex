    // returns all pokemon values from localstorage
    export default function getAllCapturedPokemon() {

        console.log('refreshing captured pokemon...')

        if (typeof window !== 'undefined') {
            var values = [...JSON.parse(localStorage.getItem('pokemon'))]
            return values;
        }
    }