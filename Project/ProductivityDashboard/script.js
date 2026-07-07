const weatherApiKey = "6adce22b6d217bda16375310950c585e";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jamshedpur&appid=${weatherApiKey}&units=metric`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        console.log("City: " + data.name);
        console.log("Temperature: " + data.main.temp + "°C");
        console.log("Weather: " + data.weather[0].main);
        console.log("Humidity: " + data.main.humidity + "%");
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });



const quotesApiKey = "urCIhxhjLBgOQgkHbgj9tzWdVw44wYZgSxXkPlNK";

fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
    headers: {
        "X-Api-Key": quotesApiKey
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);

        console.log("Quote: " + data[0].quote);
        console.log("Author: " + data[0].author);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// card 

let dotoList = document.getElementById("doto");
let dailyPlanner = document.getElementById("dailyPlanner");
let dailyGoals = document.getElementById("dailyGoals");
let pomodoroTimer = document.getElementById("pomodoroTimer");
let motivationQuote = document.getElementById("motivationQuote");

let dashboard = document.getElementById("dashboard");

dotoList.addEventListener("click", function () {});
dailyPlanner.addEventListener("click", function () {});
dailyGoals.addEventListener("click", function () {});
pomodoroTimer.addEventListener("click", function () {});
motivationQuote.addEventListener("click", function () {});
