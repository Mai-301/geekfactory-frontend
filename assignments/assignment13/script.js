(function (scope) {
    "use strict";

    var form = document.querySelector('form');
    var editForm = document.querySelector('#edit-todo');
    var tasksContainer = document.querySelector('#tasks');
    var submitEditButton = document.querySelector('#submit_edit');
    var taskManager = createTaskManager();
    form && form.addEventListener('submit', addTask);



    taskManager.onChange(update);
    loadTasks();


    function addTask(event) {
        event.preventDefault();
        var task = {};
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            task[input.name] = input.value;
            input.value = null;
        });
        taskManager.create(task.category, task.title, task.priority, task.estimate);
    }

    function update() {
        while (tasksContainer.hasChildNodes()) {
            tasksContainer.removeChild(tasksContainer.lastChild);
        }

        taskManager.getAll().forEach(function (task) {
            tasksContainer.appendChild(createTaskRow(task));
        });
        localStorage.setItem('tasks', JSON.stringify(taskManager.getAll()));
    }

    function createTaskRow(task) {
        var tr = document.createElement('tr');
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        var editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() ? '&#10004;' : ''));

        tr.appendChild(document.createElement('td')).appendChild(deleteButton).addEventListener('click', deleteTask(task));
        tr.appendChild(document.createElement('td')).appendChild(editButton).addEventListener('click', loadTaskDetails(task));

        return tr;
    }
    function loadTaskDetails(task) {
        return function () {
            submitEditButton.disabled = false;
            editForm.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
                input.disabled = false;
                input.value = task[input.name];
            });

            editForm && editForm.addEventListener('submit', function (event) {
                event.preventDefault();
                event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
                    if (input.name === 'done') {
                        if (input.checked)
                            task.remaining = 0;
                    }
                    else {
                        task[input.name] = input.value;
                    }
                    input.disabled = true;
                });
                taskManager.edit(task);
                submitEditButton.disabled = true;
            });
        }
    }
    function deleteTask(task) {
        return function () {
            taskManager.remove(task);
        }
    }

    function createTableCell(text) {
        var td = document.createElement('td');
        var text = document.createTextNode(text);
        td.appendChild(text);
        return td;
    }

    function storeTasks(tasks) {
        if (typeof scope.localStorage !== 'undefined') {
            scope.localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    function loadTasks() {
        if (typeof scope.localStorage !== 'undefined') {
            var tasks = JSON.parse(scope.localStorage.getItem('tasks'));
            tasks && tasks.forEach(function (task) {
                taskManager.create(task.category, task.title, task.priority, task.estimate);
            })
        }
    }
})(window);