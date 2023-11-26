let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dueDate = document.getElementById("dueDate");
    const category = document.getElementById("category");
    const taskList = document.getElementById("taskList");


    if (taskInput.value === "" || dueDate.value === "") {
        alert("Please enter a task and due date.");
        return;
    }


    const newTask = {
        taskName: taskInput.value,
        dueDate: dueDate.value,
        category: category.value,
        completed: false,
    };


    tasks.push(newTask);
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    renderTasks();
    taskInput.value = "";
    dueDate.value = "";

}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        
        const taskItem = document.createElement("li");
        taskItem.classList.add("task", task.category);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();

        });

        const label = document.createElement("label");
        label.textContent = `${task.taskName} - Due Date: ${task.dueDate}`;


        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskList.appendChild(taskItem);

        if (task.completed) {
            label.style.textDecoration = "line-through";
        
        }
    });
}
