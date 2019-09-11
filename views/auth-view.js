
function createAuth(el, store) {
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

function createElements({ auth }, store) {
    return { 
        auth: createAuth(auth, store),
    }
}

export { createElements }
