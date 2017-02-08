var Task = require('./task');

var create = function () {
    let taskManager = {
        create: function (category,title,priority,estimate) {
            return new Task(category,title,priority,estimate);
        }
    }
    return taskManager;
}
exports.create = create;