const ctx2 = document.getElementById('doughnutchart').getContext('2d');
const doughnutchart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Travel', 'Bills', 'Misc.'],
        datasets: [{
            label: 'Monthly Expenditure', 
            data: [food, travel, bills, misc], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ]   ,
            borderWidth: 1
        }]
    },
    Options: {
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
});

import{food, bills, travel, misc} from './script.js';
