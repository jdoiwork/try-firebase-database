
function createAuth(el, service, store) {
    return new Vue({
        el: el,
        data: {
          props: [
            { key: 'displayName'},
            { key: 'email' },
            { key: 'providerId' },
            { key: 'uid' },
            { key: 'isAnonymous' },
          ]
        },
        store,
        computed: Vuex.mapGetters(['isSignedIn', 'user']),
      
        methods: {
          signIn: function() {
            console.log("sign in")
            service.signIn()
          },
          signInAnon: function() {
            console.log("sign in")
            service.signInAnon()
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
