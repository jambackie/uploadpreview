import { createStore } from 'vuex'
import { filesModule } from './filesModule'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    files: filesModule,
  },
})
