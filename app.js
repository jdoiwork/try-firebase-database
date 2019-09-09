console.log("hello javascript")

import * as myservice from './myservice.js'

let provider = new firebase.auth.GoogleAuthProvider()
console.log(provider)

// -----------------------------------
// info view
var info = new Vue({
  el: '#info',
  data: {
    info: {},
  },
  created: function(){
    // read data
    var self = this
    myservice.subscribe((val) => self.updateInfo(val))

  },

  methods: {
    updateInfo: function(val){
      this.info = val;
      console.debug("updateInfo", val, this)
    }
  }
})


// ----------------------------------------
// form view
var form = new Vue({
  el: '#form',
  data: myservice.init(),
  methods: {
    onSubmit: function(){
      // write data
      myservice.post("618", this.name, this.email, "https://jdoi.pw");
      console.debug("submit")
    }
  }
})

