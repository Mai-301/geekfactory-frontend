document.getElementById('addTaskForm').addEventListener('submit', function (evt) {
    evt.preventDefault();
    var category = document.getElementById('category').value;
    var title = document.getElementById('title').value;
    var priority = document.getElementById('priority').value;
    var estimate = document.getElementById('estimate').value;
    var task = createTaskManager().create(category, title, priority, estimate);
    var rows = '';
    rows += '<tr><td>' + task.category + '</td><td>' + task.title + '</td><td>' + task.priority + '</td><td>' + task.estimate + '</td></tr>';
    var tbody = document.getElementById('tasksTableBody');
    var tr = document.createElement('tr');
    tr.innerHTML = rows;
    tbody.appendChild(tr)
    document.getElementById('category').value = '';
    document.getElementById('title').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('Festimate').value = '';
});