const user = JSON.parse(sessionStorage.getItem('user'))


const ctx = document.getElementById('barChart').getContext('2d');
const dataValues2 = [10, 8, 7, 15, 10];
const maxValue2 = Math.max(...dataValues2);
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
        datasets: [{
            label: 'Dados da Semana',
            data: [10, 8, 7, 15, 10],
            backgroundColor: dataValues2.map(value => 
                value === maxValue2 
                    ? '#8B4513' // Cor especial para a maior barra
                    : '#535D67' // Cor padrão para as outras barras
            ),
            
            borderWidth: 1,
            borderRadius:11,
            borderSkiped: 'none'
        }]
    },
    options: {
        plugins:{
            legend:{
                display: false
            }

        }
        ,
        scales: {
            x: {
                grid: {
                    display: false // Remove linhas da grade no eixo X
                },
                ticks: {
                    color: '#000', // Cor dos rótulos no eixo X
                }
            },
            y: {
                display: false
            }
        }
    }
});


const ctx2 = document.getElementById('barChartPorUsuario').getContext('2d');
const dataValues = [10, 8, 7, 15, 10];
const maxValue = Math.max(...dataValues);
const barChartPorUsuario = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
        datasets: [{
            label: 'Dados da Semana',
            data: [10, 8, 7, 15, 10],
            backgroundColor: dataValues.map(value => 
                value === maxValue 
                    ? '#fff' // Cor especial para a maior barra
                    : '#535D67' // Cor padrão para as outras barras
            ),
           
            borderWidth: 1,
            borderRadius:11,
            borderSkiped: 'none'
        }]
    },
    options: {
        plugins:{
            legend:{
                display: false
            }

        }
        ,
        scales: {
            x: {
                grid: {
                    display: false // Remove linhas da grade no eixo X
                },
                ticks: {
                    color: '#fff', // Cor dos rótulos no eixo X
                }
            },
            y: {
                display: false
            }
        }
    }
});