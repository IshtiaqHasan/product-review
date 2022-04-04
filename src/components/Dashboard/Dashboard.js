import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div>
            <h1 className='chartheading'>Our Yearly Sales & Revenue Data</h1>
            <div className='chart container'>
                <div className='lineChart'>
                    <h4>Month Wise Sell</h4>
                    <LineChart width={500} height={300} data={chart}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </LineChart>
                </div>
                <div className='barChart'>
                    <h4>Investment vs Revenue</h4>
                    <BarChart
                        width={500}
                        height={300}
                        data={chart}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;