export const filesModule = {
  namespaced: true,

  state: {
    files: [],
    active: 0,
  },

  getters: {
    activeFile: (state) => {
      if (state.files.length > 0) {
        const file = state.files[state.active]
        return URL.createObjectURL(file)
      }
    },
  },

  mutations: {
    setFiles(state, arr) {
      state.files = arr
    },
    setNext(state) {
      state.active =
        state.active === state.files.length - 1 ? 0 : state.active + 1
    },
    setPrev(state) {
      state.active =
        state.active === 0 ? state.files.length - 1 : state.active - 1
    },
  },
}
