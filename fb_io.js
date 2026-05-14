/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
  function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
  }

  var GLOBAL_user;

function fb_login(){
 authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

function fb_handleLogin(_user){
  if (_user) {
    console.log("user has logged in")
    GLOBAL_user = _user; //save the user details object to a global var.
  
  } else{
    console.log("user hasnt logged in, starting popup process")
    fb_popupLogin();
  }
}

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; 
    console.log("user has logged in")
  });
}