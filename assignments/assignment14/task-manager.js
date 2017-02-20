var create = function () {
    var tasks = [];
    var onChangeCallBack = null;
    function create(category, title, priority, estimate, spent) {
        var task = new Task(category, title, priority, estimate, spent);
        tasks.push(task);
        onChangeCallBack && onChangeCallBack(tasks);
        return task;
    }
    ;
    function find(query) {
        query && query.toLowerCase && (query = query.toLowerCase());
        return _filter(function (t) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    }
    function get(i) {
        return tasks[i];
    }
    function edit(task) {
        var editedTask = tasks.indexOf(task);
        tasks[editedTask] = task;
        onChangeCallBack && onChangeCallBack(tasks);
    }
    function getAll(activeOnly) {
        return _filter(function (task) {
            return !activeOnly || !task.done();
        });
    }
    function remove(index) {
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
        tasks.forEach(function (task) {
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
