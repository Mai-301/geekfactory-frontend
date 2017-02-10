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
        },
        getAll: function (isActiveOnly) {
            if (isActiveOnly) {
                this.tasksArr.forEach(function (task, taskIndex) {
                    if (task.estimate === 0) {
                        this.tasksArr.splice(taskIndex, 1);
                    }
                }, this);
            }
            return this.tasksArr;
        },
        find: function (query) {
            let foundTasks = [];
            this.tasksArr.forEach(function (task) {
                let lastIndex = task.title.lastIndexOf(' ');
                let truncatedTitle = task.title.toLowerCase().substring(0, lastIndex + 2);
                if (truncatedTitle === query || task.category === query) {
                    foundTasks.push(task);
                }
            }, this);
            return foundTasks;
        },
        remove: function (query) {
            if (typeof query === 'number' && query < this.tasksArr.length) {
                this.tasksArr.splice(query, 1);
            }
            else if (query instanceof Task) {
                let taskIndex = this.tasksArr.indexOf(query);
                if (taskIndex !== -1) {
                    this.tasksArr.splice(taskIndex, 1);
                }
            }
        }
    }
    return taskManager;
}
exports.create = create;
