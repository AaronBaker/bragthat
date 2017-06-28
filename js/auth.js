// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'http://www.bragthat.com/tos'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

showAuth = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;

      console.log("USER:",user);

      s.user = user;

      user.getToken().then(function(accessToken) {
        // document.getElementById('sign-in-status').textContent = 'Signed in';
        // document.getElementById('sign-in').textContent = 'Sign out';
        // document.getElementById('account-details').textContent = JSON.stringify({
        //   displayName: displayName,
        //   email: email,
        //   emailVerified: emailVerified,
        //   phoneNumber: phoneNumber,
        //   photoURL: photoURL,
        //   uid: uid,
        //   accessToken: accessToken,
        //   providerData: providerData
        // }, null, '  ');
      });
    } else {
      // User is signed out.

      console.log("NO USER");
      s.user = null;
      // document.getElementById('sign-in-status').textContent = 'Signed out';
      // document.getElementById('sign-in').textContent = 'Sign in';
      // document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log("USER ERROR",error);
  });
};

window.addEventListener('load', function() {
  showAuth()
});
