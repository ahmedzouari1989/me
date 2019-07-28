var p = MindFusion.Scheduling;
var hoursList;





TimeForm.prototype = Object.create(p.BaseForm.prototype);
TimeForm.prototype.constructor = TimeForm;


// get the index of the current item's rank to set the value of the Ranks drop-down
TimeForm.prototype.getStartTimeIndex = function () {
    if (this.item != null && this.item.startTime != null) {

        let index = this.item.startTime.__getHours() * 2;
        if (this.item.startTime.__getMinutes() > 0)
            index++;
        return index;

    }
    return -1;
}

TimeForm.prototype.getSubject = function () {
    return this.item.subject;
}

// get the index of the current item's rank to set the value of the Ranks drop-down
TimeForm.prototype.getEndTimeIndex = function () {
    if (this.item != null && this.item.endTime != null) {
        let hours = this.item.endTime.__getHours();
        let minutes = this.item.endTime.__getMinutes();

        let index = hours * 2;

        if (minutes > 0)
            index += 1;

        return index;

    }
    return -1;
}



