import axios from 'axios'

const APIkey = 'ab7vrK_3qh2eHXZSqVvlwdxXDfkKLFvPipajRXfKJ7g'

const unsplahCollection = axios.create({
    baseURL: `https://api.unsplash.com/search/collections?client_id=${APIkey}&per_page=9&query=`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export default unsplahCollection