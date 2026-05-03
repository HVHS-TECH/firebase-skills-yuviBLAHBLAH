/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}
function byeWorld() {
  console.log("Running byeWorld()")
  firebase.database().ref('/').set(
    {
      message: 'bye'
    }
  )
}
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead, fb_readError);
  console.log("Leaving simpleRead")
}
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}
function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }
  else {
    console.log("The message is: " + dbData)
  }
}
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead)
}
function zipyDipy() {
  console.log("Running zipyDipy()")
  firebase.database().ref('/').set(
    {
      game1: {
        users: {
          bigBoy: 67,
          smallBoy: 6.7,
          fillip: 12,
          bung: 8739457389,
        }
      },
      game2: {
        users: {
          bigBoy: 67,
          smallBoy: 6.7,
          fillip: 12,
          bung: 8739457389,
        }
      }
    }
  )
}
firebase.database().ref('/').set(highScoreTable)
function fb_readHighScores() {
  console.log("Reading high scores");
  firebase.database().ref('/highScores/game1').once('value', displayRead, fb_readError)
}