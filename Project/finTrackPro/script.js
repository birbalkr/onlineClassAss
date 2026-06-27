





















// chartjs 
const ctx = document.getElementById('myChart');
let income = 55;
let expense = 30;
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