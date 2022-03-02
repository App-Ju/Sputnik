import axios from 'axios'

//введите ключ доступа в переменной APIkey
const APIkey = ''

const unsplahPhoto = axios.create({
    baseURL: `https://api.unsplash.com/photos/random?client_id=${APIkey}`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export default unsplahPhoto