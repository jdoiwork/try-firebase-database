console.log("hello javascript")

import * as databaseView    from "./views/database-view.js"
import * as databaseService from './services/database-service.js'

import * as authView    from "./views/auth-view.js"
import * as authService from './services/auth-service.js'

import * as todoView    from "./views/todo-view.js"
//import * as databaseService from './services/database-service.js'

import { createStore } from './stores/app_store.js'

Vue.use(Vuex)

const store = createStore({
    database: databaseService,
    auth: authService,
})


authService.subscribe(user => store.dispatch('updateUser', user))

authView.createElements({ auth: "#auth"}, store)
databaseView.createElements({ info: "#info", form: "#form" }, store)
todoView.createElements({ form: '#todos-new'}, store)
