// left size code 

// Navbar code 
let dashbord = document.querySelector("#dash");
let setting=document.querySelector("#sett");
let dashbordPage = document.querySelector("#dashPage");
let settingPage=document.querySelector("#settingPage");
let addTransaction=document.querySelector('#addTrans');
let addTransactionPage=document.querySelector('#TransactionLayout');
let closeBtn=document.querySelector('#closeBtn');

setting.addEventListener('click', function(){
    dashbord.classList.remove('bg-blue-200');
    setting.classList.add('bg-blue-200');
    dashbordPage.classList.add('hidden')
    settingPage.classList.remove('hidden')


})
dashbord.addEventListener('click', function(){
    setting.classList.remove('bg-blue-200');
    dashbord.classList.add('bg-blue-200');
    settingPage.classList.add('hidden')
    dashbordPage.classList.remove('hidden')
})


// Add Transaction
addTransaction.addEventListener('click', ()=>{
    addTransactionPage.classList.remove('hidden');
})
closeBtn.addEventListener('click', ()=>{
    addTransactionPage.classList.add('hidden');
})






















// chartjs 
const ctx = document.getElementById('myChart');
let income = 505;
let expense = 3000;
new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: ['Income Vs Expense'],
        datasets: [{
            label: 'Income',
            data: [`${income}`],
            borderWidth: 1
        },
    {
            label: 'Expense',
            data: [`${expense}`],
            borderWidth: 1
        }]
    },
    
});