import {randomPhoto} from "@/api/unsplash";

export default {
    state: {
        randomPhoto: {},
        requestCollCompleted: false
    },
    actions: {
        async requestRandomPhoto(context) {
            try {
                const resultRequest = await randomPhoto()
                context.commit('loadRandomPhoto', resultRequest.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        loadRandomPhoto(state, result) {
            state.randomPhoto = result
            state.requestCollCompleted = true
        }
    },
    getters: {
        getRandomPhoto(state) {
            if (state.randomPhoto) {
                return {
                    photo: state.randomPhoto.urls.small,
                    name: state.randomPhoto.user.name,
                    title: state.randomPhoto.alt_description
                }
            }
        },
        getRandomPhotoCompleted(state) {
            return state.requestCollCompleted
        }
    }
}