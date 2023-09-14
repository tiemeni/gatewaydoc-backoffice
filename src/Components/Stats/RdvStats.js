import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ErrorIcon from '@mui/icons-material/Error';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { useCallback, useState } from "react";
import {colors} from './datatest'
import { dataMedecin } from './datatest';
import {dataMotifs} from './datatest'


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RdvStats = ()=> {
  return (<div>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', gap:"20px" }}>
            <div style={{ display:'flex', flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'center' }} className='card-stat1'>
                <div style={{ border: 'solid', borderColor:'#024146',
                 borderRadius:'1000px', height:'80px', width:"80px",
                 display: 'flex', alignItems:'center', justifyContent:'center',
                 minWidth:'80px'
                 }}>
                    <AccountCircleIcon sx={{ fontSize: 40 , color:'#04b7c9'}}/>
                </div>
                <div>
                    <p>Total des rdvs</p>
                    <p style={{ fontWeight:'bolder', fontSize:'18px', color:"#04b7c9", textShadow:"1px 1px 4px #04b9c96c" }}>2 000+</p>
                    <p style={{ fontSize: '11px' }}>Aujourd'hui</p>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'center' }} className='card-stat1'>
                <div style={{ border: 'solid', borderColor:'#024146', borderRadius:'1000px',
                 height:'80px', width:"80px",
                 display: 'flex', alignItems:'center', justifyContent:'center',
                 minWidth:'80px'}}>
                    <MeetingRoomIcon sx={{ fontSize: 40, color: '#04b7c9' }}/>
                </div>
                <div>
                    <p >Total des rdvs</p>
                    <p style={{ fontWeight:'bolder', fontSize:'18px', color:"#04b7c9", textShadow:"1px 1px 4px #04b9c96c" }}>2 000+</p>
                    <p style={{ fontSize: '11px' }}>Ce mois</p>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'center' }} className='card-stat1 redErasedColor'>
                <div style={{ border: 'solid', borderColor:'#024146', borderRadius:'1000px',
                 height:'80px', width:"80px",
                 display: 'flex', alignItems:'center', justifyContent:'center',
                 minWidth:'80px'}}>
                    <ErrorIcon sx={{ fontSize: 40, color: '#04b7c9' }}/>
                </div>
                <div>
                    <p>Total des rdvs annulés</p>
                    <p style={{ fontWeight:'bolder', fontSize:'18px', color:"#04b7c9", textShadow:"1px 1px 4px #04b9c96c" }}>2 000+</p>
                    <p style={{ fontSize: '11px' }}>Ce mois</p>
                </div>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection:'row', gap:'20px',
            backgroundColor:'#2b2b2b0c', marginTop: '20px', borderRadius: '8px',
            padding:'20px', justifyContent:"space-between"
        }}>
            <div>
                <p>Rendez-vous par medecin</p>
                <div style={{ height:'auto' }}>
                <PieChart width={250} height={230}>
                    <Pie
                        data={dataMedecin}
                        cx={100}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        baseValue={300}
                    >
                        {dataMedecin.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    </PieChart>               
                </div>
                <p>Explication des couleurs</p>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap',
                    width: '200px', gap:'5px'
                    }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:"5px"}}>
                        <div style={{ height: '10px', width:'10px',borderRadius:'2px', background:'#0088FE'}}> </div>
                        <div>Dr Tiemani</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:"5px"}}>
                        <div style={{ height: '10px', width:'10px',borderRadius:'2px', background:'#00C49F'}}> </div>
                        <div>Dr Donald</div>
                    </div>              
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:"5px"}}>
                        <div style={{ height: '10px', width:'10px',borderRadius:'2px', background:'#FFBB28'}}> </div>
                        <div>Dr Ebedava</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:"5px"}}>
                        <div style={{ height: '10px', width:'10px',borderRadius:'2px', background:'#FF8042'}}> </div>
                        <div>Dr Eug</div>
                    </div>
                </div>
            </div>
            <div>
                <p>Les motifs les plus solicités</p>
                <div>
                <BarChart
                    width={700}
                    height={300}
                    data={dataMotifs}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                    >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>
            </div>
        </div>
        <div>
            Motifs les plus selectionés
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default RdvStats;