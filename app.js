console.log("hello javascript")

import * as databaseView from "./views/database-view.js";
import * as databaseService from './services/database-service.js'

import * as authService from './services/auth-service.js'

databaseView.createElements({ info: "#info", form: "#form" }, databaseService)

let userInfo = {
  user: null,
}

authService.subscribe(user => userInfo.user = user)

var auth = new Vue({
  el: '#auth',
  data: userInfo,
  computed: {
    isSignedIn () {
      return !!this.user
    }
  },

  methods: {
    signIn: function() {
      console.log("sign in")
      authService.signIn()
    },
    signOut: function() {
      console.log("sign out")
      authService.signOut()
    }
  }
})