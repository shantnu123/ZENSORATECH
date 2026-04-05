let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>
            <button class="delete-btn">X</button>
        `;

        
        li.querySelector("span").addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        
        li.querySelector("button").addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        list.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    renderTasks();
});

renderTasks();