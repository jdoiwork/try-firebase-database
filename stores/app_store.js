
const emptyEditingInfo = {
    initialized: false,
    username: '',
    email: '',
}

function createStore(services) {
    return new Vuex.Store({
        state: {
          user: null,
          info: {},
          editingInfo: { ...emptyEditingInfo },
          infoRef: { off: () => {}}
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
          },
          updateInfoRef: (state, ref) => {
              state.infoRef = ref
          }

        },
        actions: {
          updateUser: (context, user) => {
            console.debug("act updateUser", user)
            context.commit('updateUser', user)

            if(user) {
                context.dispatch('subscribeInfo', user)
            }
            else {
                context.dispatch('unsubscribeInfo', user)
            }
          },
          commitInfo: (context) => {
            const info = context.state.editingInfo
            services.database.post(context.state.user.uid, info.username, info.email, "https://jdoi.pw")
          },
          subscribeInfo: (context, user) => {
            const updateInfo = (info) => context.commit("updateInfo", info)
            const ref = services.database.subscribe(user.uid, updateInfo)
            console.debug('subscribe info')
            context.commit('updateInfoRef', ref)
          },
          unsubscribeInfo: (context, user) => {
            console.debug('unsubscribe info')
            services.database.unsubscribe(context.state.infoRef)
            context.commit('clearInfo')
          },
        }
      })
}

export { createStore }