let create = function () {
    let tasks = [];
    let onChangeCallBack: (tasks: Task[]) => void;
    function create(category: string, title: string, priority: number, estimate: number, spent: number) {
        var task = new Task(category, title, priority, estimate, spent);
        tasks.push(task);
        onChangeCallBack && onChangeCallBack(tasks);
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
    function edit(task) {
        var editedTask = tasks.indexOf(task);
        tasks[editedTask] = task;
        onChangeCallBack && onChangeCallBack(tasks);
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
            onChangeCallBack && onChangeCallBack(tasks);

        }
    }

    function _filter(predicte) {
        var matched = [];
        tasks.forEach(function (task: Task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }
    function onChange(callBack) {
        onChangeCallBack = callBack;

    }


    return {
        create: create,
        find: find,
        get: get,
        getAll: getAll,
        remove: remove,
        onChange: onChange,
        edit: edit

    };
};

