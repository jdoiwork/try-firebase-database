console.log("hello javascript")

import * as databaseView from "./views/database-view.js";
import * as databaseService from './services/database-service.js'

import * as authService from './services/auth-service.js'

databaseView.createElements({ info: "#info", form: "#form"}, databaseService)


function userSignOut() {
  firebase.auth().signOut().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log("error", error)
  })
}

let userInfo = {
  user: null,
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("user is signed in", user)
  }
  else {
    console.log("user is signed out")
  }
  userInfo.user = user

})

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
      userSignOut()
    }
  }
})