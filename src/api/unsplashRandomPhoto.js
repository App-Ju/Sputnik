import axios from 'axios'

const APIkey = 'ab7vrK_3qh2eHXZSqVvlwdxXDfkKLFvPipajRXfKJ7g'

const unsplahPhoto = axios.create({
    baseURL: `https://api.unsplash.com/photos/random?client_id=${APIkey}`,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
    },
})

export default unsplahPhoto