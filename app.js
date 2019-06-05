console.log("hello javascript")
// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('/users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}




var info = new Vue({
  el: '#info',
  data: {
    info: {},
  },
  created: function(){
    // read data
    var self = this
    database.ref('/users/618').on('value', function(snapshot){
      var val = snapshot.val()
      console.debug(val)
      self.updateInfo(val)
    }, function(error){console.error(error)})
  },

  methods: {
    updateInfo: function(val){
      this.info = val;
      console.debug("updateInfo", val, this)
    }
  }
})


var form = new Vue({
  el: '#form',
  data: {
    name: "jdoi",
    email: "jdoi.work@gmail.com",
  },
  methods: {
    onSubmit: function(){
      // write data
      writeUserData("618", this.name, this.email, "https://jdoi.pw");
      console.debug("submit")
    }
  }
})

