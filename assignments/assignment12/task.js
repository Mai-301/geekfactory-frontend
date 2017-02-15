var Task = function (category, title, priority, estimate) {
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = 1.5;
}
Task.prototype.track = function (trackNum) {
    if (!isNaN(trackNum) && trackNum > 0) {
        this.spent = trackNum;
        this.remaining = this.estimate - this.spent;
    }
}
Task.prototype.done = function () {
    return this.remaining === 0 ? true : false;
}
Task.prototype.complete = function () {
    this.remaining = 0;
}
