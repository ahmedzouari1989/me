const firebaseConfig1 = {
    apiKey: "AIzaSyD1Uw72tvSZuMjDk64G5VjAzORB5BWfnGI",
    authDomain: "projetweb1gomycode.firebaseapp.com",
    databaseURL: "https://projetweb1gomycode.firebaseio.com",
    projectId: "projetweb1gomycode",
    storageBucket: "",
    messagingSenderId: "535884563434",
    appId: "1:535884563434:web:2645d2aefc4b1ff3"
};

function loadData(calendar) {
    // Initialize Firebase
    if (!firebase.apps.length) {

        firebase.initializeApp(firebaseConfig1);
    }
    var starCountRef = firebase.database().ref('myform/');
    starCountRef.on('value', function (snapshot) {

// create a new instance of the calendar

        calendar.currentView = p.CalendarView.SingleMonth;

        calendar.theme = "light";

//add the start time prefix before each subject
        calendar.itemSettings.titleFormat = "%s[hh:mm tt] %h";

        var key = Object.keys(snapshot.val());
        var k
        for (k = 0; k < key.length; k++) {
            firebase.database().ref('myform/' + key[k]).on('value', function (childSnapshot) {
                if (childSnapshot.val().confirmation == true) {
                    console.log('myform/' + key[k])
                    console.log(childSnapshot.val())
                    // console.log(new Date(childSnapshot.val().date).toString().replace("02:00:00",childSnapshot.val().starttime+":00"));
                    var reversation = {
                        '_subject': childSnapshot.val().namen + " " + childSnapshot.val().namep,
                        '_startTime': {'_date': new Date(childSnapshot.val().date).toString().replace("01:00:00", childSnapshot.val().starttime + ":00")},
                        '_endTime': {'_date': new Date(childSnapshot.val().date).toString().replace("01:00:00", childSnapshot.val().endtime + ":00")},
                        _allowChangeStart: false, _allowChangeEnd: false, _allowMove: false
                    }
                    var item = new p.Item();
                    item.subject = reversation._subject;
                    item.startTime._date = new Date(new Date(childSnapshot.val().date).toString().replace("01:00:00", childSnapshot.val().starttime + ":00"));
                    item.endTime._date = new Date(new Date(childSnapshot.val().date).toString().replace("01:00:00", childSnapshot.val().endtime + ":00"));
                    calendar.schedule.items.add(item);
                    console.log(item);
                }
            });
        }
        console.log('repaint');
        calendar.render();
        // disable this built-in forms for item creation and modification
        calendar.useForms = false;

// handle the itemDoubleClick event to show the custom form for item editing
        calendar.itemDoubleClick.addEventListener(handleItemDoubleClick);
        // calendar.repaint(true);

    });
}

var p = MindFusion.Scheduling;

var calendar = new p.Calendar(document.getElementById("calendar"));


//visualize the calendar
loadData(calendar);


// calendar..addEventListener(handleSelectionEnd);


function handleItemDoubleClick(sender, args) {
    // create and show the custom form
    var form = new TimeForm(sender, args.item, "edit");
    form.showForm();
}

function handleSelectionEnd(sender, args) {
    // create a new item with the start and end time of the selection
    var item = new p.Item();
    item.startTime = args.startTime;
    item.endTime = args.endTime;
    // create and show the custom form
    var form = new TimeForm(sender, item, "new");
    form.showForm();

    console.log(item)
}





