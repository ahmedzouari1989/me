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
  
var p = MindFusion.Scheduling;
var hoursList;

var TimeForm = function (calendar, item, type)
{
	p.BaseForm.call(this, calendar, item);

	this._id = "TimeForm";
	this._type = type;
	this.headerText = "Réservation";
	
}

TimeForm.prototype = Object.create(p.BaseForm.prototype);
TimeForm.prototype.constructor = TimeForm;




// get the index of the current item's rank to set the value of the Ranks drop-down
TimeForm.prototype.getStartTimeIndex = function ()
{
	if (this.item != null && this.item.startTime != null)
	{
		
		let index  = this.item.startTime.__getHours() * 2;
		if(this.item.startTime.__getMinutes() > 0)
			index++;
		return index;		
		
	}
	return -1;
}

TimeForm.prototype.getSubject = function()
{
		return this.item.subject;
}

// get the index of the current item's rank to set the value of the Ranks drop-down
TimeForm.prototype.getEndTimeIndex = function ()
{
	if (this.item != null && this.item.endTime != null)
	{
		let hours = this.item.endTime.__getHours();
		let minutes = this.item.endTime.__getMinutes();
		
		let index = hours * 2;
		
		if (minutes > 0)
			index += 1;
		
		return index;
		
	}
	return -1;
}

// override BaseForm's drawButtons method to create form buttons
TimeForm.prototype.drawButtons = function ()
{
	var thisObj = this;

	var btnSave = this.createButton({
		id: "btnSave",
		text: this.localInfo.saveButtonCaption,
		events: { "click": function click(e)
		{	

			return thisObj.onSaveButtonClick(e);
		}
		}
	});

	var btnCancel = this.createButton({
		id: "btnCancel",
		text: this.localInfo.cancelButtonCaption,
		events: { click: function click(e)
		{
			return thisObj.onCancelButtonClick(e);
		}
		}
	});

	var buttons = this.row();
	buttons.classList.add("mfp-buttons-row");
	buttons.appendChild(btnSave.element);
	buttons.appendChild(btnCancel.element);

	return buttons;
};

TimeForm.prototype.onSaveButtonClick = function (e)
{
	// update the item with the form data
	 // update the item with the form data
 var startIndex = +this.getControlValue("start_time");
 var startTime = this.item.startTime.date.clone().addHours(startIndex * 0.5);

 var endIndex = +this.getControlValue("end_time");
 var endTime = this.item.endTime.date.clone().addHours(endIndex * 0.5);

 // if end time is specified, decrease it by one day
 if (endIndex != 0 && this.item.endTime.hour == 0)
  endTime.addDays(-1);

 // check for inconsistent start/end time
 if (startTime.valueOf() > endTime.valueOf())
         endTime = startTime.clone().addHours(1);

 // apply changes 
 this.item.subject = this.getControlValue("subject"); 
 this.item.startTime = startTime;
 this.item.endTime = endTime;

 // if a new item is created, add it to the schedule.items collection
 if (this.type === "new")
  this.calendar.schedule.items.add(this.item);

 // close the form
 this.closeForm();

 // repaint the calendar
 this.calendar.repaint(true);
};




