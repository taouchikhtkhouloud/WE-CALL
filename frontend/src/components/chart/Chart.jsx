import React from 'react'
import './Chart.css'
import {
    LineChart,
    Line,
    XAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
function Chart({title,data,dataKey}) {
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey={dataKey} stroke="#839AA8"/>
                <Line type="monotone" dataKey="Active User" stroke="#839AA8"/>
                <Tooltip/>
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart