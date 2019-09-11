// Get a reference to the database service
const database = firebase.database()

function initModel() {
    return {
        name: "jdoi",
        email: "jdoi.work@gmail.com",
    }
}

function writeUserData(userId, name, email, imageUrl) {
    database
        .ref('/users/' + userId)
        .set({
            username: name,
            email: email,
            profile_picture: imageUrl,})
}

function readUserData(callback, userId){
    database
        .ref(`/users/${userId}`)
        .on('value', (snapshot) => {
            console.log("on value")
            callback(snapshot.val())
        })

}


export
    { initModel     as init
    , writeUserData as post
    , readUserData  as subscribe
    }

