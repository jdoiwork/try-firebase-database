
function createAuth(el, service, store) {
    return new Vue({
        el: el,
        data: {},
        computed: {
          isSignedIn () {
            return !!this.user
          },
          user () {
            return store.state.user
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

function createElements({ auth }, service, store) {
    return { 
        auth: createAuth(auth, service, store),
    }
}

export { createElements }
