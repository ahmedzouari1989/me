const firebaseConfig = {
    apiKey: "AIzaSyD1Uw72tvSZuMjDk64G5VjAzORB5BWfnGI",
    authDomain: "projetweb1gomycode.firebaseapp.com",
    databaseURL: "https://projetweb1gomycode.firebaseio.com",
    projectId: "projetweb1gomycode",
    storageBucket: "",
    messagingSenderId: "535884563434",
    appId: "1:535884563434:web:2645d2aefc4b1ff3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function submitForm() {

    var namen = document.getElementById("namen").value
    var namep = document.getElementById("namep").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var date = document.getElementById("date").value
    var starttime = document.getElementById("starttime").value

    var endtime = document.getElementById("endtime").value
    var message = document.getElementById("message").value
    var confirmation = false
    senddata(namen, namep, email, date, starttime, endtime, phone, confirmation,message)

}

function senddata(namen, namep, email, date, starttime, endtime, phone, confirmation,message) {

    firebase.database().ref('myform/').push({
        namen: namen,
        namep: namep,
        email: email,
        date: date,
        starttime: starttime,
        endtime: endtime,
        phone: phone,
        confirmation: confirmation,
        message : message
    });

}


var starCountRef = firebase.database().ref('myform/');
starCountRef.on('value', function (snapshot) {
    var key = Object.keys(snapshot.val());
    var k
    for (k = 0; k < key.length; k++) {
        firebase.database().ref('myform/' + key[k]).on('value', function (childSnapshot) {
            if (childSnapshot.val().confirmation == true) {
                console.log('myform/' + key[k])
                console.log(childSnapshot.val())
                // console.log(new Date(childSnapshot.val().date).toString().replace("02:00:00",childSnapshot.val().starttime+":00"));
                var item = {
                    '_subject':childSnapshot.val().namen + " "+childSnapshot.val().namep,
                    '_startTime':{'date':new Date(childSnapshot.val().date).toString().replace("02:00:00",childSnapshot.val().starttime+":00")},
                    '_endTime':{'date':new Date(childSnapshot.val().date).toString().replace("02:00:00",childSnapshot.val().endtime+":00")},
                    _allowChangeStart: false, _allowChangeEnd: false, _allowMove: false
                }
                console.log(item);
            }

        });
    }
});


