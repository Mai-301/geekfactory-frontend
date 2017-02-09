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
        find: function (titleOrCategory) {
            let foundTasks = [];
            this.tasksArr.forEach(function (task) {
                let lastIndex = task.title.lastIndexOf(' ');
                let truncatedTitle=task.title.toLowerCase().substring(0,lastIndex+2);
                if (truncatedTitle === titleOrCategory || task.category === titleOrCategory) {
                    foundTasks.push(task);
                }
            }, this);
            return foundTasks;
        }
    }
    return taskManager;
}
exports.create = create;
