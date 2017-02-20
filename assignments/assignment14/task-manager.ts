import { Task } from "./task";

export let create = function () {
    let tasksArr = [];
    function create(category:string, title:string, priority:number, estimate:number) {
        let task = new Task(category, title, priority, estimate);
        tasksArr.push(task);
        return task;
    };
    function get(index:number) {
        return tasksArr[index];
    };
    function getAll(isActiveOnly:boolean) {
        if (isActiveOnly) {
            tasksArr.forEach(function (task:Task, taskIndex:number) {
                if (task.estimate === 0) {
                    tasksArr.splice(taskIndex, 1);
                }
            }, this);
        }
        return tasksArr;
    };
    function find(query:string) {
        let foundTasks = [];
        tasksArr.forEach(function (task: Task) {
            if (task.title.toLowerCase().indexOf(query) > -1 || task.category.toLowerCase().indexOf(query) > -1)
                foundTasks.push(task);

        }, this);
        return foundTasks;
    };
    function remove(query:Task | number) {
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

