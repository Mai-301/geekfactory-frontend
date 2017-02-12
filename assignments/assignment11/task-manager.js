var Task = require('./task');

var create = function () {
    var tasksArr = [];
    function create(category, title, priority, estimate) {
        var task = new Task(category, title, priority, estimate);
        tasksArr.push(task);
        return task;
    };
    function get(index) {
        return tasksArr[index];
    };
    function getAll(isActiveOnly) {
        if (isActiveOnly) {
            tasksArr.forEach(function (task, taskIndex) {
                if (task.estimate === 0) {
                    tasksArr.splice(taskIndex, 1);
                }
            }, this);
        }
        return tasksArr;
    };
    function find(query) {
        let foundTasks = [];
        tasksArr.forEach(function (task) {
            if (task.title.toLowerCase().indexOf(query) > -1 || task.category.toLowerCase().indexOf(query) > -1)
                foundTasks.push(task);

        }, this);
        return foundTasks;
    };
    function remove(query) {
        if (typeof query === 'number' && query < tasksArr.length) {
            tasksArr.splice(query, 1);
        }
        else if (query instanceof Task) {
            let taskIndex = tasksArr.indexOf(query);
            if (taskIndex !== -1) {
                tasksArr.splice(taskIndex, 1);
            }
        }
    }
    return {
        create: create,
        get: get,
        getAll: getAll,
        find: find,
        remove: remove
    }
}
exports.create = create;
