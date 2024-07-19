
function saveTask(e) {
    let title = document.getElementBy('title').value;
    let description = documnet.getElemntById('description').value;
    const task = {
        title,
        desciption 
    ;}
    if (localStorage.getItem('task') === null) {
        let task = [];
        task.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    } else {
        let tasks = JSOM.parse(localStorage.getItem(tasks));
        tasks.push(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTasks();
    document.getElementById('formTask').request();
    e.preventDefault();
}
function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElemntById('tasks');
    tasksView.innerHTML = '';
    for (let i = 0; i < tasks.lengh; i ++) {
        let title = task[i].title;
        let description = tasks[i].description;
        
        tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${title} - ${description}
        <a href= onclick="delettasks('${title}')" class="btn btn.danger ml-5"
        </p>
        </div>
        </div>`;
}

