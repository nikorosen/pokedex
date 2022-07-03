    // returns all pokemon values from localstorage
    export default function getAllStorage() {

        console.log('refreshing captured pokemon...')

        if (typeof window !== 'undefined') {
            var values = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while (i--) {
                ('order' in JSON.parse(localStorage.getItem(keys[i]))) ?
                    values.push(JSON.parse(localStorage.getItem(keys[i]))) : null;
            }

            return values;
        }
    }