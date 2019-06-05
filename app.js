console.log("hello javascript")
// Get a reference to the database service
var database = firebase.database();
console.log(database);

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('/users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

// read data
database.ref('/users/618').on('value', function(snapshot){
  console.log(snapshot.val());
})

// write data
writeUserData("618", "jdoi-a", "jdoi.work@gmail.com", "https://jdoi.pw");

