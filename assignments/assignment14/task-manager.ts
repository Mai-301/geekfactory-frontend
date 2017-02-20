import { Task } from "./task";
export let create = function () {
    let tasks = [];

    function create(category: string, title: string, priority: number, estimate: number) {
        var task = new Task(category, title, priority, estimate);
        tasks.push(task);
        return task;
    };

    function find(query: string) {
        query && query.toLowerCase && (query = query.toLowerCase());

        return _filter(function (t: Task) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    }

    function get(i: number) {
        return tasks[i];
    }

    function getAll(activeOnly?: boolean) {
        return _filter(function (task: Task) {
            return !activeOnly || !task.done();
        });
    }

    function remove(index: any) {
        if (typeof index !== 'number') {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i] === index) {
                    index = i;
                    break;
                }
            }
        }

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
        }
    }

    function _filter(predicte) {
        var matched = [];
        tasks.forEach(function (task:Task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }

    return {
        create: create,
        find: find,
        get: get,
        getAll: getAll,
        remove: remove
    };
};

