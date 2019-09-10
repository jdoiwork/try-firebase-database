console.log("hello javascript")

import * as databaseView    from "./views/database-view.js";
import * as databaseService from './services/database-service.js'

import * as authView    from "./views/auth-view.js";
import * as authService from './services/auth-service.js'

databaseView.createElements({ info: "#info", form: "#form" }, databaseService)

let userInfo = {
  user: null,
}

authService.subscribe(user => userInfo.user = user)
authView.createElements({ auth: "#auth"}, authService, userInfo)
