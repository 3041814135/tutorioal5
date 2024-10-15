// 添加任务到待办事项列表，并将其保存到本地存储
function addTask() {
    let task = document.getElementById('taskInput').value;
    if (task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        document.getElementById('taskInput').value = ''; // 清空输入框
    }
}

// 显示任务列表
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // 清空任务列表
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${task} <button onclick="removeTask(${index})">Remove</button></li>`;
    });
}

// 从任务列表中移除指定任务
function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1); // 删除指定任务
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(); // 更新任务列表
}

// 页面加载时显示任务列表
window.onload = displayTasks;