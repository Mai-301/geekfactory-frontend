(function (scope) {
    let form = document.querySelector('form');
    let editForm = document.querySelector('#edit-todo') as HTMLElement as any;
    editForm.task = {};
    let tasksContainer = document.querySelector('#tasks');
    let submitEditButton = document.querySelector('#submit_edit') as HTMLElement as any;
    let taskManager = create();
    form && form.addEventListener('submit', addTask);
    editForm && editForm.addEventListener('submit', editTask);
    taskManager.onChange(update);
    loadTasks();
    function editTask(event:Event) {
        event.preventDefault();
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            if (input.name === 'done') {
                if (input.checked) {
                    editForm.task.complete();
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
        if (editForm.task.estimate < editForm.task.spent)
            editForm.task.remaining = 0;
        taskManager.edit(editForm.task);
        submitEditButton.disabled = true;
    }

    function addTask(event:Event) {
        event.preventDefault();
        var task = {} as any;
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            task[input.name] = input.value;
            input.value = null;
        });
        taskManager.create(task.category, task.title, task.priority, task.estimate, task.spent);
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

    function createTaskRow(task: Task) {
        var tr = document.createElement('tr');
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        var editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority.toString()));
        tr.appendChild(createTableCell(task.estimate.toString()));
        tr.appendChild(createTableCell(task.remaining.toString()));
        tr.appendChild(createTableCell(task.done() ? 'Yes' : 'No'));

        tr.appendChild(document.createElement('td')).appendChild(deleteButton).addEventListener('click', deleteTask(task));

        tr.appendChild(document.createElement('td')).appendChild(editButton).addEventListener('click', loadTaskDetails(task));

        return tr;
    }

    function loadTaskDetails(task: Task) {
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
    function deleteTask(task: Task) {
        return function () {
            taskManager.remove(task);
        }
    }

    function createTableCell(text: string) {
        var td = document.createElement('td');
        var nodeText = document.createTextNode(text);
        td.appendChild(nodeText);
        return td;
    }

    function storeTasks(tasks: Array<Task>) {
        if (typeof scope.localStorage !== 'undefined') {
            scope.localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    function loadTasks() {
        if (typeof scope.localStorage !== 'undefined') {
            var tasks = JSON.parse(scope.localStorage.getItem('tasks'));
            tasks && tasks.forEach(function (task) {
                taskManager.create(task.category, task.title, task.priority, task.estimate, task.spent);
            })
        }
    }
})(window);