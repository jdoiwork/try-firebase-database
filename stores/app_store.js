
function createStore() {
    return new Vuex.Store({
        state: {
          user: null,
          info: {},
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
          }
        },
        mutations: {
          updateUser: (state, user) => {
            console.debug("mut updateUser", user)
            state.user = user
          },
          updateInfo: (state, info) => {
              state.info = info
          },
          clearInfo: (state) => {
              state.info = {}
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