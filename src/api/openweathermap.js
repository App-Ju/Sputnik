import axios from 'axios'

const lat = '56.488712'
const lon = '84.952324'
const APIkey = '76d9e9faa5acb10376e1527cc8ff2899'

const currentWeather = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${APIkey}`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})

export default currentWeather