/**
 * Capitalize the first letter ina  string
 * @param {string} : input string
 * @return {string} : input string with first letter capitalized
 */
export default function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}