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

function userSignIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.debug("OK", token, user)
  }).catch(logError)
}

function userSignOut() {
    firebase.auth().signOut().catch(logError)
}

export
    { userSignIn  as signIn
    , userSignOut as signOut
    }
