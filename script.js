const task = [];

function addTask() {
    const inputTask = document.querySelector('.task');
    const taskValue = inputTask.value.trim(); 
    if (taskValue !== '') { 
        task.push(taskValue);
        inputTask.value = ''; 
        renderTask();
    } else {
        alert('Please enter a task!');
    }
}

function renderTask() {
    const taskList = document.querySelector('.showTask');
    taskList.innerHTML = ''; 

    task.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        taskList.appendChild(li);
    });
}
