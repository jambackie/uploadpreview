import { createStore } from 'vuex'
import { filesModule } from './filesModule'
import { settingsModule } from './settingsModule'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    files: filesModule,
    settings: settingsModule,
  },
})
