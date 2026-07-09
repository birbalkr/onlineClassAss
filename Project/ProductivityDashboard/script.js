const images = [
    "image/a.jpg",
    "image/c.jpg",
    "image/d.jpg",
    "image/e.jpg"
];
let index = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url(${images[index]})`;
    document.body.style.backgroundSize = "cover";
    index++;

    if (index == images.length) {
        index = 0;
    }
}
changeBackground();
setInterval(changeBackground, 10000);

// 000000000000000000000000000000000000000000000000000000000000000000000000000000000

let themeButton = document.getElementById("themebtn");
let themeOn = document.getElementById("themeon");
let allthem = document.querySelectorAll(".theme");

themeButton.addEventListener("click", function () {
    themeOn.classList.toggle("left-1");
    themeOn.classList.toggle("right-1");
    allthem.forEach(function (element) {
        element.classList.toggle("darkTheme");
        element.classList.toggle("lightTheme");
    }
    )
})

// Weather API Integration
let weather = document.getElementById("weather");
const weatherApiKey = "6adce22b6d217bda16375310950c585e";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jamshedpur&appid=${weatherApiKey}&units=metric`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("Weather:", data.weather[0].main);

        let weatherImage = "image/weather.png"; // Default image

        if (data.weather[0].main == "Clear") {
            weatherImage = "image/clear.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherImage = "image/cloudy.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImage = "image/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage = "image/drizzle.png";
        } else if (data.weather[0].main == "Thunderstorm") {
            weatherImage = "image/thunderstorm.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImage = "image/snow.png";
        } else if (
            data.weather[0].main == "Mist" ||
            data.weather[0].main == "Smoke" ||
            data.weather[0].main == "Haze" ||
            data.weather[0].main == "Dust" ||
            data.weather[0].main == "Fog"
        ) {
            weatherImage = "image/mist.png";
        }

        weather.innerHTML = `
        <div class="flex items-center gap-4">

                    <img src="${weatherImage}" alt="weather" class="w-16 h-16">

                    <div>
                        <h2 class="text-white text-md font-bold">
                            ${data.main.temp + "°C"}
                        </h2>

                        <p class=" text-lg font-bold">
                            ${data.name}
                        </p>
                    </div>

                    <div>
                        <div class=" text-md font-bold">
                            <div >Weather: <span class="text-[#e5e5e5]">${data.weather[0].main}</sapn> </div>
                        </div>
                    </div>
                    <div>
                        <div class="font-bold text-md">
                            <div>Humidity: <span class="text-[#e5e5e5]">${data.main.humidity + "%"}</sapn> </div>
                        </div>
                    </div>

                </div>`


        console.log("City: " + data.name);
        console.log("Temperature: " + data.main.temp + "°C");
        console.log("Weather: " + data.weather[0].main);
        console.log("Humidity: " + data.main.humidity + "%");
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });

// Quote of the Day API Integration

const quote = document.getElementById("quote");
const quotesApiKey = "urCIhxhjLBgOQgkHbgj9tzWdVw44wYZgSxXkPlNK";

// fetch("https://api.api-ninjas.com/v2/quoteoftheday", {
//     headers: {
//         "X-Api-Key": quotesApiKey
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         quote.innerHTML = `
//         <div>Quote of the day</div>
//         <h2  class="text-gray-600 text-sm font-bold">
//                             ${data[0].quote}
//                         </h2>
//         `;
//         console.log("Quote: " + data[0].quote);
//         console.log("Author: " + data[0].author);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });

// Quote API Integration

// Time and Date

let timeanddate = document.getElementById("timeanddate");
setInterval(() => {
    let now = new Date();
    let currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    // Date
    let currentDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    timeanddate.innerHTML = `
                    <h2 class="text-black text-lg font-bold ">
                        ${currentTime}
                    </h2>
                    <p class="text-[#fca311] text-lg">
                        ${currentDate}
                    </p>
                    `;
}, 1000);



// card 
let todo = document.getElementById("todo");
let dailyPlannerCard = document.getElementById("dailyPlannerCard");
let dailyGoalsCard = document.getElementById("dailyGoalsCard");
let pomodoroTimerCard = document.getElementById("pomodoroTimerCard");
let motivationQuoteCard = document.getElementById("motivationQuoteCard");
let dashboard = document.getElementById("dashboard");
let todolist = document.getElementById("todolist");
let closeX = document.querySelectorAll(".closeX");
let addTask = document.getElementById("addTask");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let dailyPlanner = document.getElementById("dailyPlanner");
let dailyPlannerList = document.getElementById("dailyPlannerList");
let dailyGoals = document.getElementById("dailyGoals");
let pomodoroTimer = document.getElementById("pomodoroTimer");
let dailyInput = document.getElementById("dailyInput");
let dailyTask = document.getElementById("dailyTask");
let dailyProgress = document.getElementById("dailyProgress");
let dailyTaskList = document.getElementById("dailyTaskList");

todo.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    todolist.classList.remove("hidden");
});

for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener("click", function () {
        dashboard.classList.remove("hidden");
        todolist.classList.add("hidden");
        dailyPlanner.classList.add("hidden");
        dailyGoals.classList.add("hidden");
        pomodoroTimer.classList.add("hidden");
        motivationQuote.classList.add("hidden");
    });
}

// 000000000000000000000000000000000000000000000000000000000000000000000000000000000

dailyPlannerCard.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    dailyPlanner.classList.remove("hidden");
});

const slots = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

function saveTask(time, value) {
    localStorage.setItem(time, value);
}

function renderPlanner() {
    const rows = slots.map(s => `
        <div class="flex items-center gap-4 bg-[#2a2d37] p-3 rounded-xl border border-gray-700 mb-3">
    <span class="w-20 text-blue-400 font-bold">${s}</span>

    <i class="fa-regular fa-clock text-gray-400"></i>

    <input
        type="text"
        placeholder="Nothing planned"
        value="${localStorage.getItem(s) || ''}"
        class="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        onchange="saveTask('${s}', this.value)">
</div>
    `).join("");

    dailyPlannerList.innerHTML = `
        ${rows}
    `;
}
renderPlanner();

// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        taskList.innerHTML += `
        <div class="flex justify-between items-center gap-4 mb-2 p-2 border rounded-lg bg-[#2a2d37]">
            <div class="text-xl">${task.text}</div>
            <div class="flex gap-4 items-center">
                <i
                    class="fa-${task.important ? "solid" : "regular"} fa-star text-xl imp"
                    data-index="${index}"
                    style="color:${task.important ? "gold" : "white"}"
                ></i>
                <i
                    class="fa-${task.done ? "solid" : "regular"} fa-circle-check text-xl done"
                    data-index="${index}"
                    style="color:${task.done ? "limegreen" : "white"}"
                ></i>

                <div
                    class="border py-2 px-4 rounded-2xl del"
                    data-index="${index}"
                >
                    Delete
                </div>
            </div>
        </div>
        `;
    });
}
renderTasks();
addTask.addEventListener("click", function () {
    let taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        tasks.push({
            text: taskValue,
            important: false,
            done: false
        });
        saveTasks();
        renderTasks();
    }
    taskInput.value = "";
});

taskList.addEventListener("click", function (e) {

    if (e.target.classList.contains("imp")) {
        let index = e.target.dataset.index;
        tasks[index].important = !tasks[index].important;
        saveTasks();
        renderTasks();
    }
    if (e.target.classList.contains("done")) {
        let index = e.target.dataset.index;
        tasks[index].done = !tasks[index].done;
        saveTasks();
        renderTasks();
    }
    if (e.target.classList.contains("del")) {
    let index = e.target.dataset.index;
        if (!tasks[index].important) {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        } else {
            if (confirm("An important task! Do you want to delete it?")) {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            } else {
                alert("Task not deleted.");
            }
        }
    }
});

// 0000000000000000000000000000000000000000000000000000000000000000000000000000000000

dailyGoalsCard.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    dailyGoals.classList.remove("hidden");
});

let dailyTasknum = 0;
let dailyTaskDone = 0;
let dailyTasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

function saveGoals() {
    localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
}

function GoalsTasks() {
    dailyTaskList.innerHTML = "";
    dailyTasknum = dailyTasks.length;
    dailyTaskDone = 0;
    dailyTasks.forEach(function (task, index) {
        if (task.done) {
            dailyTaskDone++;
        }
        dailyTaskList.innerHTML += `
        <div class="flex justify-between items-center gap-4 mb-2 p-2 border rounded-lg bg-[#2a2d37]">
            <div class="text-xl">
                <i
                    class="fa-${task.done ? "solid" : "regular"} fa-circle-check text-xl done"
                    data-index="${index}"
                    style="color:${task.done ? "limegreen" : "white"}"
                ></i>
                ${task.text}
            </div>
            <div class="flex gap-4 items-center">
                <div
                    class="border py-2 px-4 rounded-2xl del"
                    data-index="${index}"
                >
                    Delete
                </div>
            </div>
        </div>
        `;
    });
    dailyProgress.max = dailyTasknum;
    dailyProgress.value = dailyTaskDone;
}

GoalsTasks();

dailyTask.addEventListener("click", function () {
    let inputData = dailyInput.value.trim();
    if (inputData !== "") {
        dailyTasks.push({
            text: inputData,
            done: false
        });
        saveGoals();
        GoalsTasks();
        dailyInput.value = "";
    }
});


dailyTaskList.addEventListener("click", function (e) {

    if (e.target.classList.contains("done")) {
        let index = e.target.dataset.index;
        dailyTasks[index].done = !dailyTasks[index].done;
        saveGoals();
        GoalsTasks();
    }

    // Delete
    if (e.target.classList.contains("del")) {

        let index = e.target.dataset.index;

        dailyTasks.splice(index, 1);

        saveGoals();
        GoalsTasks();
    }

});

// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

pomodoroTimerCard.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    pomodoroTimer.classList.remove("hidden");
});

let timer = document.getElementById("timer");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let minutes = 25;
let seconds = 0;
let interval;

function showTimer() {
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    timer.textContent = m + ":" + s;
}

showTimer();
start.addEventListener("click", function () {

    if (interval) {
        return;
    }
    interval = setInterval(function () {
        if (seconds == 0) {
            if (minutes == 0) {
                clearInterval(interval);
                interval = null;
                alert("🎉 Time's Up!");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        showTimer();
    }, 1000);
});
pause.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
});
reset.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    minutes = 25;
    seconds = 0;
    showTimer();
});

motivationQuoteCard.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    motivationQuote.classList.remove("hidden");
});

// 00000000000000000000000000000000000000000000000000000000000000000000000

let quoteUpdate = document.getElementById("quoteUpdate");

// function updateQuote() {

//     fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
//         headers: {
//             "X-Api-Key": quotesApiKey
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             quoteUpdate.innerHTML = `
//         <div>Random Quote</div>

//         <h2  class="text-white text-xl font-bold">
//                             ${data[0].quote}
//                         </h2>
//         <div class="text-gray-400 text-sm flex flex-col gap-2">
//         <span>${"Author: " + data[0].author}</span>
// <span>${"Category: " + data[0].category}</span>
//     <div class="border py-2 px-3 w-25 rounded-2xl  cursor-pointer" onclick="updateQuote()">Update</div>
// </div>

//         `;
//         })
//         .catch(error => {
//             console.log("Error:", error);
//         });

// }

window.addEventListener("load", function () {
    updateQuote();
});