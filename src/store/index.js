import {createStore} from 'vuex'
import weather from './modules/weather'
import unsplash from './modules/unsplash'
import unsplashRandomPhoto from "./modules/unsplashRandomPhoto"
import nasaAPOD from "./modules/nasaAPOD";

export default createStore({
    modules: {
        weather,
        unsplash,
        unsplashRandomPhoto,
        nasaAPOD
    }
})
