import {photoCollection} from "@/api/unsplash"

export default {
    state: {
        photoCollection: [],
        requestCollCompleted: false
    },
    actions: {
        async requestColl(context, query) {
            try {
                const resultRequest = await photoCollection(query)
                context.commit('updateCollection', resultRequest.data.results)
            } catch (error) {
                console.log(error)
                context.commit('clearCollection')
            }
        }
    },
    mutations: {
        updateCollection(state, result) {
            state.photoCollection = result
            state.requestCollCompleted = true
        },
        clearCollection(state) {
            state.photoCollection = []
            state.requestCollCompleted = false
        }
    },
    getters: {
        getCollection(state) {
            if (state.photoCollection) {
                const result = []
                for (let i = 0; i < state.photoCollection.length; i++) {
                    result[i] = {}
                    result[i].photo = state.photoCollection[i].cover_photo.urls.full
                    result[i].name = state.photoCollection[i].user.name
                    result[i].title = state.photoCollection[i].cover_photo.alt_description || state.photoCollection[i].title
                }
                return result
            }
        },
        getRequestCollCompleted(state) {
            return state.requestCollCompleted
        }
    }
}