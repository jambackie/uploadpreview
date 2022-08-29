export const filesModule = {
  namespaced: true,

  state: {
    files: [],
  },

  getters: {
    filesLinks: (state) => {
      return state.files.map((el) => URL.createObjectURL(el))
    },
  },

  mutations: {
    setFiles(state, arr) {
      state.files = arr
    },
  },
}
