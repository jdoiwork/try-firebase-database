// Get a reference to the database service
const database = firebase.database()

const emptyModel = {
    username: '',
    email: '',
}

function writeUserData(userId, name, email, imageUrl) {
    database
        .ref('/users/' + userId)
        .set({
            username: name,
            email: email,
            profile_picture: imageUrl,})
}

function readUserData(userId, callback){
    let ref = database.ref(`/users/${userId}`)
    ref.on('value', (snapshot) => {
            console.debug(`on value, userId: ${userId}`)
            callback({...emptyModel, ...snapshot.val()})
        })
    return ref
}

function unsubscribe(ref) {
    ref.off()
}

export
    { writeUserData as post
    , readUserData  as subscribe
    , unsubscribe
    }

