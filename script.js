const task = [];

function addTask() {
    const inputTask = document.querySelector('.task');
    const taskValue = inputTask.value;
    if (taskValue.trim() !== '') {
        task.push(taskValue);
        inputTask.value = '';
        renderTask();
    } else {
        alert('Please enter a task!');
    }
}

function deleteTask(index) {
    task.splice(index, 1);
    renderTask();
}

function renderTask() {
    const taskList = document.querySelector('.showTask');
    taskList.innerHTML = '';

    task.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
