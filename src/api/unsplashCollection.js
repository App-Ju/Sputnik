import axios from 'axios'

const APIkey = ''

const unsplahCollection = axios.create({
    baseURL: `https://api.unsplash.com/search/collections?client_id=${APIkey}&query=`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export default unsplahCollection