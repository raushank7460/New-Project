function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
            <span onclick="toggleComplete(this)" class="task">${taskText}</span>
            <div>
                <button class="btn edit" onclick="editTask(this)">Edit</button>
                <button class="btn delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle("completed");
}

function deleteTask(deleteButton) {
    deleteButton.parentElement.parentElement.remove();
}

function editTask(editButton) {
    let li = editButton.parentElement.parentElement;
    let taskText = li.querySelector(".task");

    let newText = prompt("Update your task:", taskText.innerText);

    if (newText && newText.trim() !== "") {
        taskText.innerText = newText;
    } else {
        alert("Task cannot be empty!");
    }
}