import { createStore } from 'vuex'
import { filesModule } from './filesModule'
import { settingsModule } from './settingsModule'

export default createStore({
  state: {
    fullscreen: false,
  },
  getters: {},
  mutations: {
    toggleFullscreen(state) {
      state.fullscreen = !state.fullscreen
    },
  },
  actions: {},
  modules: {
    files: filesModule,
    settings: settingsModule,
  },
})
