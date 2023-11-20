"use client"
import React from 'react';
import {XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import styles from  "./chart.module.css"
const Chart = () => {
  const data = [
    {
      name: "Sun",
      visit: 7000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 5780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 13490,
      click: 4300,
    },
  ];
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip  contentStyle={{background: "#151c2c", border: "none", borderRadius: "20px"}}/>
          <Area type="monotone" dataKey="visit" stroke="#1c8b6d" fill="#1c8b6d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart