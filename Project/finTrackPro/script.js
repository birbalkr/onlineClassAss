// check if user is logged in or not
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

// logout btn
let logoutBtn = document.querySelector('#logoutBtn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});

// leftSize code 

// Navbar code 
let dashbord = document.querySelector("#dash");
let setting = document.querySelector("#sett");
let dashbordPage = document.querySelector("#dashPage");
let settingPage = document.querySelector("#settingPage");
let addTransaction = document.querySelector('#addTrans');
let addTransactionPage = document.querySelector('#TransactionLayout');
let closeBtn = document.querySelector('#closeBtn');
// set username 
let usernameSave = document.querySelector('#usernameSave');
let profileUser = document.querySelector('#profileUser');
const username = localStorage.getItem('username');
usernameSave.textContent = username;
profileUser.value = username;



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
                data: [`${localStorage.getItem("income") || 0}`],
                borderWidth: 1
            },
            {
                label: "Expense",
                data: [`${localStorage.getItem("expense") || 0}`],
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
let incomeBalance = document.querySelector('#incomeBalance');
let expenseBalance = document.querySelector('#expenseBalance');
let transactionnumber = document.querySelector('#transactionnumber');


addTransBtn.addEventListener("click", () => {

    let type = transType.value;
    let desc = transDesc.value;
    let amount = parseFloat(transAmount.value);
    let date = transDate.value;
    let category = transCategory.value;

    localStorage.setItem("transType", type);
    localStorage.setItem("transDesc", desc);
    localStorage.setItem("transDate", date);
    localStorage.setItem("transCategory", category);

    if(type==="income"){
        let totalbalance = parseFloat(currentBalance.textContent) + amount;
        let totalincome = parseFloat(incomeBalance.textContent) + amount;
        console.log(totalbalance);
        localStorage.setItem("balance", totalbalance);
        localStorage.setItem("income", totalincome);
        
    } else if(type==="expense"){
        let totalbalance = parseFloat(currentBalance.textContent) - amount;
        let totalexpense = parseFloat(expenseBalance.textContent) + amount;
        console.log(totalbalance);
        localStorage.setItem("balance", totalbalance);
        localStorage.setItem("expense", totalexpense);
    }

    localStorage.setItem("transactionnumber", (parseInt(localStorage.getItem("transactionnumber")) || 0) + 1);

    addTransactionPage.classList.add('hidden');
    loadData();
});

function loadData() {
    console.log("Page Loaded");
    transactionnumber.textContent = localStorage.getItem("transactionnumber") || "0";
    incomeBalance.textContent = localStorage.getItem("income") || "0";
    currentBalance.textContent = localStorage.getItem("balance") || "0";
    expenseBalance.textContent = localStorage.getItem("expense") || "0";
}

window.onload = loadData;

let resetData = document.querySelector('#resetData');
resetData.addEventListener('click', () => {
    localStorage.removeItem("balance");
    localStorage.removeItem("income");
    localStorage.removeItem("expense");
    localStorage.removeItem("transactionnumber");
    localStorage.removeItem("transType");
    localStorage.removeItem("transDesc");
    localStorage.removeItem("transDate");
    localStorage.removeItem("transCategory");
    loadData();
    updateChart(0, 0);
});










