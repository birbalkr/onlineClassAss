let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let tasks = document.querySelector(".tasks");
btn.addEventListener("click", function () {
    let task = input.value;
    if (!task.trim()) {
    return;
}
    tasks.innerHTML += `
        <div>
            <h3>${task}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>`
        input.value = "";


})