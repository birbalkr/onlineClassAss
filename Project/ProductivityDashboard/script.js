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
                        <h2 class="text-gray-600 text-sm font-bold">
                            ${data.main.temp + "°C"}
                        </h2>

                        <p class="text-gray-400 text-sm">
                            ${data.name}
                        </p>
                    </div>

                    <div>
                        <div class="text-gray-400 text-sm">
                            <div>Weather: <span>${data.weather[0].main}</sapn> </div>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400 text-sm">
                            <div>Humidity: <span>${data.main.humidity + "%"}</sapn> </div>
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

// fetch("https://api.api-ninjas.com/v2/quoteoftheday?categories=success,wisdom", {
fetch("https://api.api-ninjas.com/v2/quoteoftheday", {
    headers: {
        "X-Api-Key": quotesApiKey
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quote.innerHTML = `
        <div>Quote of the day</div>
        <h2  class="text-gray-600 text-sm font-bold">
                            ${data[0].quote}
                        </h2>
        `;
        console.log("Quote: " + data[0].quote);
        console.log("Author: " + data[0].author);
    })
    .catch(error => {
        console.log("Error:", error);
    });

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
                    <h2 class="text-gray-600 text-xs font-bold ">
                        ${currentTime}
                    </h2>
                    <p class="text-gray-400 text-xs">
                        ${currentDate}
                    </p>
                    `;
}, 1000);



// card 

let todo = document.getElementById("todo");
let dailyPlannerCard = document.getElementById("dailyPlannerCard");
let dailyGoals = document.getElementById("dailyGoals");
let pomodoroTimer = document.getElementById("pomodoroTimer");
let motivationQuote = document.getElementById("motivationQuote");

let dashboard = document.getElementById("dashboard");
let todolist = document.getElementById("todolist");
let closeX = document.querySelectorAll(".closeX");
let addTask = document.getElementById("addTask");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let dailyPlanner = document.getElementById("dailyPlanner");
let dailyPlannerList = document.getElementById("dailyPlannerList");


todo.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    todolist.classList.remove("hidden");
});

for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener("click", function () {
        dashboard.classList.remove("hidden");
        todolist.classList.add("hidden");
        dailyPlanner.classList.add("hidden");
    });
}

dailyPlannerCard.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    dailyPlanner.classList.remove("hidden");
});

const slots = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

let plannerData = {
    '09:00': 'Team standup',
    '11:00': 'Design review'
};

function renderPlanner() {
    const rows = slots.map(s => `
        <div class="flex items-center gap-4 bg-[#2a2d37] p-3 rounded-xl border border-gray-700 mb-3">
    <span class="w-20 text-blue-400 font-bold">${s}</span>

    <i class="fa-regular fa-clock text-gray-400"></i>

    <input
        type="text"
        placeholder="Nothing planned"
        value=""
        class="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        onchange="plannerData['${s}']=this.value">
</div>
    `).join("");

    dailyPlannerList.innerHTML = `
        ${rows}
    `;
}
renderPlanner();


addTask.addEventListener("click", function () {
    let taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        taskList.innerHTML += `
        <div class="flex justify-between items-center gap-4 mb-2 p-2 border rounded-lg bg-[#2a2d37]">
                    <div class="text-xl">${taskValue}</div>
                    <div class="flex gap-4 items-center">
                        <i class="fa-regular fa-star text-xl imp"></i>
                        <i class="fa-regular fa-circle-check text-xl done"></i>
                        <div class="border py-2 px-4 rounded-2xl del">Delete</div>
                    </div>
                </div>
        `
    }
    taskInput.value = "";
});

taskList.addEventListener("click", function (e) {

    if (e.target.classList.contains("imp")) {
        if (e.target.classList.contains("fa-star")) {
            e.target.classList.remove("fa-star");
            e.target.classList.add("fa-solid");
            e.target.style.color = "gold";
        }
    }

    if (e.target.classList.contains("done")) {
        e.target.classList.toggle("fa-solid");
        e.target.style.color =
            e.target.classList.contains("fa-solid") ? "limegreen" : "white";
    }

    if (e.target.classList.contains("del")) {
        let doneIcon = e.target.parentElement.querySelector(".imp");
        if (doneIcon.style.color !== "gold") {
            e.target.parentElement.parentElement.remove();
        } else {
            if (confirm("An important task! Do you want to delete it?")) {
                e.target.parentElement.parentElement.remove();
            }
            else {
                alert("Task not deleted.");
            }



        }
    }
});




dailyGoals.addEventListener("click", function () { });
pomodoroTimer.addEventListener("click", function () { });
motivationQuote.addEventListener("click", function () { });


// svg-inline--fa fa-star
