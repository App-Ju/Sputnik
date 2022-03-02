import axios from 'axios'

//введите ключ доступа в переменной APIkey
const APIkey = ''

const unsplahCollection = axios.create({
    baseURL: `https://api.unsplash.com/search/collections?client_id=${APIkey}&per_page=9&query=`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export default unsplahCollection