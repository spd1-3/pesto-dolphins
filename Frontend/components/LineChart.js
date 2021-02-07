import { useMemo } from 'react'
import { Line } from 'react-chartjs-2';
function LineChart () {
    const today = new Date()
    const options = {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    distribution: 'linear',
                    ticks: {
                        max: new Date(),
                        min:  new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
                        maxTicksLimit: 7,
                        fontColor: 'rgba(255, 255, 255, 1)'
                    },
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontColor: 'rgba(255, 255, 255, 0.3)',
                        zeroLineColor: 'rgba(255, 255, 255, 1)'
                    }

                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        fontColor: 'rgba(255, 255, 255, 1)'
                    },
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontColor: 'rgba(255, 255, 255, 0.3)',
                        zeroLineColor: 'rgba(255, 255, 255, 1)'
                    }
                }]
            },
            // tooltips: {
            //     callbacks: {
            //         title: function(value) {
            //             return moment(value[0].xLabel).format('ll');
            //         }
            //     }
            // },
            title: {
                display: false,
                position: 'top',
                fontSize: 18,
                text: 'Daily'
            },
            legend: {
                display: false
            }
        };
        const data = {
            datasets: [
                {
                    label: 'Total Messages',
                    data: [
                        {
                            x: today,
                            y: 135,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
                            y: 115,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
                            y: 110,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3),
                            y: 120,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4),
                            y: 100,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
                            y: 81,
                        },
                        {
                            x: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
                            y: 20,
                        },
                    ],
                    ...{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(255, 255, 255, 1)',
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(255, 255, 255, 1)'
                    }
                }
            ]
        }
    return (
        <Line
            data={ data }
            options={ options }
        />
    )
}
export default LineChart
