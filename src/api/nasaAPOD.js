import axios from "axios";

const APIkey = process.env.VUE_APP_NASA_API_KEY

const nasaAPOD = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`,
    method: "GET",
})

export default nasaAPOD