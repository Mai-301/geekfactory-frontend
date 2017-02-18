(function (scope) {
    "use strict";

    var form = document.querySelector('form');
    var editForm = document.querySelector('#edit-todo');
    editForm.task = {};
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
        // tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() ? 'Yes' : 'No'));

        tr.appendChild(document.createElement('td')).appendChild(deleteButton).addEventListener('click', deleteTask(task));


        tr.appendChild(document.createElement('td')).appendChild(editButton).addEventListener('click', loadTaskDetails(task));
        editForm.task = task;
        return tr;
    }

    editForm && editForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            if (input.name === 'done') {
                if (input.checked) {
                    editForm.task.complete();
                    //editForm.task.spent = editForm.task.estimate;
                }
            }
            else if (input.type === 'number') {
                editForm.task[input.name] = parseInt(input.value);
            }
            else {
                editForm.task[input.name] = input.value;
            }

            input.disabled = true;
        });
        editForm.task.track(parseInt(editForm.task.spent));
        taskManager.edit(editForm.task);
        
       // taskManager.edit(editForm.task);
        submitEditButton.disabled = true;
    });

    function loadTaskDetails(task) {
        return function () {
            submitEditButton.disabled = false;
            editForm.task = task;
            editForm.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
                if (input.name !== 'remaining') {
                    input.disabled = false;
                }
                input.value = task[input.name];
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