import nasaAPOD from "@/api/nasaAPOD";

export default {
    state: {
        nasaAPOD: {},
        requestNasaCompleted: false
    },
    actions: {
        async requestNasaAPOD(context) {
            try {
                const resultRequest = await nasaAPOD()
                context.commit('loadNasaAPOD', resultRequest.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        loadNasaAPOD(state, result) {
            state.nasaAPOD = result
            state.requestNasaCompleted = true
        }
    },
    getters: {
        getNasaAPOD(state) {
            if (state.nasaAPOD) {
                return {
                    photo: state.nasaAPOD.hdurl,
                    title: state.nasaAPOD.title,
                    fact: state.nasaAPOD.explanation
                }
            }
        },
        getNasaCompleted(state) {
            return state.requestNasaCompleted
        }
    }
}