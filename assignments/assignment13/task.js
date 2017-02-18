var Task = function (category, title, priority, estimate) {
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = this.spent || 0;
    this.remaining = this.remaining || this.estimate;
}
Task.prototype.track = function (trackNum) {
    if (!isNaN(trackNum) && trackNum > 0) {
        this.spent += trackNum;
        this.remaining = Math.max(this.estimate - trackNum, 0);
    }
}
Task.prototype.done = function () {
    return this.remaining === 0 ? true : false;
}
Task.prototype.complete = function () {
    this.remaining = 0;
}

