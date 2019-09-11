
function createStore() {
    return new Vuex.Store({
        state: {
          user: null,
        },
        getters: {
          isSignedIn: state => {
            return !!state.user
          },
          user: state => {
            return state.user
          }
        },
        mutations: {
          updateUser: (state, user) => {
            console.debug("mut updateUser", user)
            state.user = user
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