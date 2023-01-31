import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend )

export default function Chart() {
    const data = {
        labels: ['one', 'two', 'three'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['aqua', 'orangered', 'purple']
            }
        ]
    }

    const options = {

    }
    return (
        <div>
            <Pie data= {data}
                options={options}
                width={500}
                height={500}
            />
    </div>)
}
