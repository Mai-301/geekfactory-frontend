var Task = function (category, title, priority, estimate, spent) {
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = spent || 0;
    this.remaining = this.estimate - this.spent;
}
Task.prototype.track = function (trackNum) {
    if (!isNaN(trackNum) && trackNum > 0) {
        this.spent = trackNum;
        this.remaining = Math.max(this.estimate - this.spent, 0);
    }
}
Task.prototype.done = function () {
    return this.remaining === 0 ? true : false;
}
Task.prototype.complete = function () {
    this.remaining = 0;
}

