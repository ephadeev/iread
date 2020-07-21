const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);
    console.log(number);
    response.send(number.toString());
});

exports.toMyLinkedinPage = functions.https.onRequest((request, response) => {
    response.redirect('https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US')
});

exports.helloWorld = functions.https.onCall((data, context) => {
    const name = data.name;
    return `Hello world from ${name}`;
});
// to call this function:
// const helloWorld = firebase.functions().httpsCallable('helloWorld');
// helloWorld({name: 'Evgeniy'}).then(result => console.log(result.data));

exports.newUserSignUp = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).set({
        firstName: '',
        lastName: '',
        friends: [],
        image: '',
        Hometown: ''
    })
});

// firebase deploy --only functions