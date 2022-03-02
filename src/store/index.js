import {createStore} from 'vuex'
import weather from './modules/weather'
import unspllash from './modules/unspllash'

export default createStore({
    modules: {
        weather,
        unspllash
    }
})
