import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Team',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Cross-Functional',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Informal Influence',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Work Habits',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
];

const DifferencesGraph = () => {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" className='text-xs'/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default DifferencesGraph 


