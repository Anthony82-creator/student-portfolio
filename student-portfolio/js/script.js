const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];
if (addTaskBtn) {
    addTaskBtn.addEventListener("click", addTask);
}

function addTask() {

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(taskInput.value);

    const li = document.createElement("li");

    li.textContent = taskInput.value + " ";

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function () {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || phone === "" || message === ""){
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(!emailPattern.test(email)){
            alert("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^[0-9]+$/;

        if(!phonePattern.test(phone)){
            alert("Phone number must contain only digits.");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}