'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Student - User ',
            font: {
                size: 20,
                weight: 'bold',
            },
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May'];


function Chart() {

    const data = {
        labels,
        datasets: [
            {
                label: 'Student',
                data: ['1', '2', '3', '4', '5'],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'User',
                data: ['5', '6', '7', '8', '9'],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };
    return (
        // <div className='w-full h-full border border-border p-4 rounded-[20px] shadow-md'>
        //     <div className='w-full h-full max-h-[400px]'>
        //         <Bar options={options} data={data} />
        //     </div>
        // </div>
        <div className='w-full h-full  border border-border p-4 rounded-[20px] shadow-md'>
            <div className='w-full h-full max-h-[400px] '>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}

export default Chart