let input = document.querySelector('input');
let tasks = document.querySelector(".tasks");
let addtask = document.querySelector('.addtask');

addtask.addEventListener('click', () => {
    let task = input.value;

    if (task.trim() === "") return;
    tasks.innerHTML += `
       <div class="flex justify-between items-center p-2 border-b-2 border-gray-300">
                    <h3>${task}</h3>
                    <div class="flex gap-2">
                        <button>Edit</button>
                        <button id="delete">Delete</button>
                    </div>
                </div>`
    input.value = "";
})