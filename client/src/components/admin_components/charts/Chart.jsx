import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        "Active User": 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        "Active User": 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        "Active User": 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        "Active User": 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        "Active User": 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        "Active User": 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        "Active User": 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {
    return (
        <ResponsiveContainer width="50%" height="100%" aspect={4 / 1}>
            <LineChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke='#5550bd' />
                <YAxis />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );

}

export default Chart;

