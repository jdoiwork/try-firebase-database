

function create_module(service) {
    return {
        actions: {
            signIn () {
                console.log("sign in")
                service.signIn()
            },
            signInAnon () {
                console.log("sign in")
                service.signInAnon()
            },
            signOut () {
                console.log("sign out")
                service.signOut()
            }
        }
    }
}

export default create_module
