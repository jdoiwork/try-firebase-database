console.log("hello javascript")

import * as databaseView    from "./views/database-view.js";
import * as databaseService from './services/database-service.js'

import * as authView    from "./views/auth-view.js";
import * as authService from './services/auth-service.js'

databaseView.createElements({ info: "#info", form: "#form" }, databaseService)

const store = new Vuex.Store({
  state: {
    user: null,
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



authService.subscribe(user => store.dispatch('updateUser', user))
authView.createElements({ auth: "#auth"}, authService, store)
