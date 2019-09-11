
const emptyEditingInfo = {
    initialized: false,
    username: '',
    email: '',
}

function createStore() {
    return new Vuex.Store({
        state: {
          user: null,
          info: {},
          editingInfo: { ...emptyEditingInfo },
        },
        getters: {
          isSignedIn: state => {
            return !!state.user
          },
          user: state => {
            return state.user
          },
          info: state => {
              return state.info
          },
          editingInfo: state => {
              return state.editingInfo
          },
        },
        mutations: {
          updateUser: (state, user) => {
            console.debug("mut updateUser", user)
            state.user = user
          },
          updateInfo: (state, info) => {
              console.log(info)
              if(!state.editingInfo.initialized) {
                  state.editingInfo = { ...info, initialized: true }
              }
              state.info = info
          },
          clearInfo: (state) => {
              state.info = {}
              state.editingInfo = { ...emptyEditingInfo }
          }
        },
        actions: {
          updateUser: (context, user) => {
            console.debug("act updateUser", user)
            context.commit('updateUser', user)
          }
        }
      })
}

export { createStore }