let provider = new firebase.auth.GoogleAuthProvider()
console.debug(provider)

function logError(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.error("error", error)
}

async function userSignIn() {
    try {
        let result = await firebase.auth().signInWithPopup(provider)
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
        console.debug("OK", token, user)

    }
    catch (error) {
        logError(error)
    }
}

async function userSignInAnon() {
    try {
        let result = await firebase.auth().signInAnonymously()
        // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = result.credential.accessToken
        // The signed-in user info.
        let user = result.user
        // ...
        console.debug("OK", user)

    }
    catch (error) {
        logError(error)
    }
}

function userSignOut() {
    firebase.auth().signOut().catch(logError)
}

function subscribe(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("user is signed in", user)
        }
        else {
          console.log("user is signed out")
        }
        
        callback(user)
    })
}


export
    { userSignIn     as signIn
    , userSignInAnon as signInAnon
    , userSignOut    as signOut
    , subscribe
    }
