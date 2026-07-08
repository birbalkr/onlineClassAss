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
let dailyPlanner = document.getElementById("dailyPlanner");
let dailyGoals = document.getElementById("dailyGoals");
let pomodoroTimer = document.getElementById("pomodoroTimer");
let motivationQuote = document.getElementById("motivationQuote");

let dashboard = document.getElementById("dashboard");
let todolist = document.getElementById("todolist");

todo.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    todolist.classList.remove("hidden");
});
dailyPlanner.addEventListener("click", function () { });
dailyGoals.addEventListener("click", function () { });
pomodoroTimer.addEventListener("click", function () { });
motivationQuote.addEventListener("click", function () { });
