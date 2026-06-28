// login code 
if (window.location.pathname.includes("index.html")) {

    if (localStorage.getItem("login") !== "true") {

        window.location.href = "login.html";

    }

}
// register code 
// leftSize code 

// Navbar code 
let dashbord = document.querySelector("#dash");
let setting = document.querySelector("#sett");
let dashbordPage = document.querySelector("#dashPage");
let settingPage = document.querySelector("#settingPage");
let addTransaction = document.querySelector('#addTrans');
let addTransactionPage = document.querySelector('#TransactionLayout');
let closeBtn = document.querySelector('#closeBtn');

setting.addEventListener('click', function () {
    dashbord.classList.remove('bg-blue-200');
    setting.classList.add('bg-blue-200');
    dashbordPage.classList.add('hidden')
    settingPage.classList.remove('hidden')


})
dashbord.addEventListener('click', function () {
    setting.classList.remove('bg-blue-200');
    dashbord.classList.add('bg-blue-200');
    settingPage.classList.add('hidden')
    dashbordPage.classList.remove('hidden')
})


// Add Transaction
addTransaction.addEventListener('click', () => {
    addTransactionPage.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    addTransactionPage.classList.add('hidden');
})


// rightSide code

// chartjs 
// chat id 

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Income Vs Expense"],
        datasets: [
            {
                label: "Income",
                data: [0],
                borderWidth: 1
            },
            {
                label: "Expense",
                data: [0],
                borderWidth: 1
            }
        ]
    },
});

function updateChart(income, expense) {
    myChart.data.datasets[0].data = [income];
    myChart.data.datasets[1].data = [expense];
    myChart.update();
}



// fetch value from the input fields id
let transType = document.querySelector('#transType');
let transDesc = document.querySelector('#transDesc');
let transAmount = document.querySelector('#transAmount');
let transDate = document.querySelector('#transDate');
let transCategory = document.querySelector('#transCategory');
let addTransBtn = document.querySelector('#addTransBtn');

// show data on cart id
let currentBalance = document.querySelector('#currentBalance');
let currentSymbol = document.querySelector('#currentSymbol');
let incomeSymbol = document.querySelector('#incomeSymbol');
let incomeBalance = document.querySelector('#incomeBalance');
let expenseSymbol = document.querySelector('#expenseSymbol');
let expenseBalance = document.querySelector('#expenseBalance');
let transactionnumber = document.querySelector('#transactionnumber');


addTransBtn.addEventListener('click', () => {


    let type = transType.value;
    let desc = transDesc.value;
    let amount = parseFloat(transAmount.value);
    let date = transDate.value;
    let category = transCategory.value;

    console.log(type, desc, amount, date, category);
    transDesc.value = '';
    transAmount.value = '';
    transDate.value = '';
    addTransactionPage.classList.add('hidden');

    if (type === 'income') {
        let chartincome = incomeBalance.textContent = parseFloat(incomeBalance.textContent) + parseFloat(amount);
        currentBalance.textContent = parseFloat(currentBalance.textContent) + parseFloat(amount);
    } else if (type === 'expense') {
        let chartexpense = expenseBalance.textContent = parseFloat(expenseBalance.textContent) + parseFloat(amount);
        currentBalance.textContent = parseFloat(currentBalance.textContent) - parseFloat(amount);
    }

    updateChart(
        parseFloat(incomeBalance.textContent),
        parseFloat(expenseBalance.textContent)
    );
    
    transactionnumber.textContent = parseInt(transactionnumber.textContent) + 1;
});














