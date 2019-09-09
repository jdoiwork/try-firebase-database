console.log("hello javascript")

import * as dbView from './views/database-view.js'

let provider = new firebase.auth.GoogleAuthProvider()
console.log(provider)

var auth = new Vue({
  el: '#auth',
  data: {
  },

  methods: {
    signIn: function() {
      console.log("sign in")
    }
  }
})