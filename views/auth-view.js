
function createAuth(el, service, data) {
    return new Vue({
        el: el,
        data: data,
        computed: {
          isSignedIn () {
            return !!this.user
          }
        },
      
        methods: {
          signIn: function() {
            console.log("sign in")
            service.signIn()
          },
          signOut: function() {
            console.log("sign out")
            service.signOut()
          }
        }
    })

}

function createElements({ auth }, service, data) {
    return { 
        auth: createAuth(auth, service, data),
    }
}

export { createElements }
