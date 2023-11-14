document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var priority = document.getElementById("priority").value;
    var label = document.getElementById("label").value;
    var deadline = document.getElementById("deadline").value;
    var description = document.getElementById("description").value;

    // Create task element
    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <div class="task-header">
            <span class="priority">${priority}</span>
            <span class="label">${label}</span>
        </div>
        <div class="task-body">Deadline: ${deadline}</div>
        <div class="task-footer">Description: ${description}</div>
        <button class="delete-button">Delete</button>
    `;

    // Add delete button functionality
    var deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    // Append task element to the task list
    document.getElementById("taskList").appendChild(taskItem);

    // Clean form values
    document.getElementById("priority").value = "High Priority";
    document.getElementById("label").value = "Office Work";
    document.getElementById("deadline").value = "";
    document.getElementById("description").value = "";
});


