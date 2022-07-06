    // returns all pokemon values from localstorage
    export default function getAllCapturedPokemon() {

        const localStorageKey = 'capturedPokemonList';
        console.log('refreshing captured pokemon...')

        if (typeof window !== 'undefined') {
            if(JSON.parse(localStorage.getItem(localStorageKey)) == null)
                return [];
                
            var values = [...JSON.parse(localStorage.getItem(localStorageKey))]
            return values;
        }
    }