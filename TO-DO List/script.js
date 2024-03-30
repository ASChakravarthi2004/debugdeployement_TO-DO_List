
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskText}</span>
            <span>Date: ${taskDate}</span>
            <span>Time: ${taskTime}</span>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
        document.getElementById("taskDate").value = "";
        document.getElementById("taskTime").value = "";
    }
}
