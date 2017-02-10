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
        find: function (title_category) {
            let foundTasks = [];
            this.tasksArr.forEach(function (task) {
                let lastIndex = task.title.lastIndexOf(' ');
                let truncatedTitle = task.title.toLowerCase().substring(0, lastIndex + 2);
                if (truncatedTitle === title_category || task.category === title_category) {
                    foundTasks.push(task);
                }
            }, this);
            return foundTasks;
        },
        remove: function (index_task) {
            if (typeof index_task === 'number' && index_task < this.tasksArr.length) {
                this.tasksArr.splice(index_task, 1);
            }
            else if (index_task instanceof Task) {
                let taskIndex = this.tasksArr.indexOf(index_task);
                if (taskIndex !== -1) {
                    this.tasksArr.splice(taskIndex, 1);
                }
            }
        }
    }
    return taskManager;
}
exports.create = create;
