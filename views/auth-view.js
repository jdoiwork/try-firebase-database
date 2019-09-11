
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
        methods: Vuex.mapActions(['signIn', 'signInAnon', 'signOut'])
    })

}

function createElements({ auth }, service, store) {
    return { 
        auth: createAuth(auth, service, store),
    }
}

export { createElements }
