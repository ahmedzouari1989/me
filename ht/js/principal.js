// Initialize Firebase
var config = {
    apiKey: "AIzaSyD8SdxstCFLtxJpPOFRdJh4gTgjhY-iVR0",
    authDomain: "gomycode-1000-coders-ma7lehom.firebaseapp.com",
    databaseURL: "https://gomycode-1000-coders-ma7lehom.firebaseio.com",
    projectId: "gomycode-1000-coders-ma7lehom",
    storageBucket: "gomycode-1000-coders-ma7lehom.appspot.com",
    messagingSenderId: "800448132496"
  };
  firebase.initializeApp(config);

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getValues('name');
	var slide = getValues('slide');
	var message = getValues('message');
	var track = getValues('track');

	ab3ith(name,slide,message,track);

		document.getElementById('contactForm').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function ab3ith(name,slide,message,track){
	var feedback = feedbacks.push();
	feedback.set({
		student: name,
		slide: slide,
		msata: message,
		track: track
	});
}