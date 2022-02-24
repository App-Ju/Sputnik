import currentWeather from "@/api/openweathermap";

export default {
    state: {
        currentWeather: {},
        requestCompleted: false
    },
    actions: {
        async requestWeather(context) {
            try {
                const resultRequest = await currentWeather()
                context.commit('updateWeather', resultRequest.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        updateWeather(state, resultRequest) {
            state.currentWeather = resultRequest
            state.requestCompleted = true
            console.log(resultRequest)
        }
    },
    getters: {
        getCurrentWeather(state) {
            return {
                temp: state.currentWeather.main.temp,
                feels_like: state.currentWeather.main.feels_like,
                humidity: state.currentWeather.main.humidity,
                pressure: state.currentWeather.main.pressure,
                weather_description: state.currentWeather.weather[0].description,
                weather_icon: state.currentWeather.weather[0].icon,
                // weather_id: state.currentWeather.weather.id,
                wind_speed: state.currentWeather.wind.speed,
            }
        },
        getRequestComplete(state) {
            return state.requestCompleted
        }
    }
}