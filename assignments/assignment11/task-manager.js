var Task = require('./task');

var create = function () {

    let taskManager = {
        tasksArr: [],
        create: function (category, title, priority, estimate) {
            this.tasksArr.push(new Task(category, title, priority, estimate));
            return this.tasksArr[0];
        },
        get: function (index) {
            return this.tasksArr[index];
        }
    }
    return taskManager;
}
exports.create = create;
