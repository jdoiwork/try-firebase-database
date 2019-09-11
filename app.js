console.log("hello javascript")

import * as databaseView    from "./views/database-view.js";
import * as databaseService from './services/database-service.js'

import * as authView    from "./views/auth-view.js";
import * as authService from './services/auth-service.js'

import { createStore } from './stores/app_store.js'

Vue.use(Vuex)

const store = createStore()


authService.subscribe(user => store.dispatch('updateUser', user))
authView.createElements({ auth: "#auth"}, authService, store)

databaseService.subscribe((info) => store.commit('updateInfo', info), '618')

databaseView.createElements({ info: "#info", form: "#form" }, databaseService, store)
