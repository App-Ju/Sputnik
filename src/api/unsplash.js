import axios from 'axios'

const APIkey = 'ab7vrK_3qh2eHXZSqVvlwdxXDfkKLFvPipajRXfKJ7g'
const instance = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export const randomPhoto = () => instance.get(`photos/random?client_id=${APIkey}`)
export const photoCollection = (query) => instance.get(`search/collections?client_id=${APIkey}&per_page=9&query=${query}`)
