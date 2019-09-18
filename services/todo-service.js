
// Get a reference to the database service
const database = firebase.database()

function getIndex(userId, callback) {
    const ref = database.ref('/todos/' + userId)

    ref.on('child_added', (snapshot) => {
        callback('child_added', snapshot.val())
    })

    return ref
}

function postNew(userId, text) {
    //console.log(userId, text)
    database
        .ref('/todos/' + userId)
        .push({
            text: text,
            completed: false,})
}

export
    { postNew
    , getIndex as subscribe
    }