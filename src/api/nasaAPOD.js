import axios from "axios";

const APIkey = '8IeWOeVBAcGblxII8J5wUVk89vJ77RO53xfQIGcO'

const nasaAPOD = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`,
    method: "GET",

})

export default nasaAPOD