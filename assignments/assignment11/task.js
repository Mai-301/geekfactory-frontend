var Task = function (category, title, priority, estimate) {
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = 1.5;
    this.track = function (trackNum) {
        //for track functions assertions
        if (!isNaN(trackNum) && trackNum > 0) {
            this.spent = trackNum;
            this.remaining = this.estimate - this.spent;
        }
    }

}
module.exports = Task;