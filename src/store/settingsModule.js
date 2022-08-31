export const settingsModule = {
  namespaced: true,

  state: {
    settings: [
      {
        name: 'default',
        label: 'Исходный размер',
      },
      {
        name: 'fill',
        label: 'На весь экран',
      },
      {
        name: 'horizontal',
        label: 'По горизонтали',
      },
      {
        name: 'vertical',
        label: 'По вертикали',
      },
      {
        name: 'square',
        label: '1:1',
      },
    ],
    currentSetting: 'default',
  },

  mutations: {
    setCurrent(state, str) {
      state.currentSetting = str
    },
  },
}
