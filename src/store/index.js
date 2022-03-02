import {createStore} from 'vuex'
import weather from './modules/weather'
import unsplash from './modules/unsplash'
import unsplashRandomPhoto from "./modules/unsplashRandomPhoto";

export default createStore({
    modules: {
        weather,
        unsplash,
        unsplashRandomPhoto
    }
})
