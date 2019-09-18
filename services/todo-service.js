
// Get a reference to the database service
const database = firebase.database()


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

    }