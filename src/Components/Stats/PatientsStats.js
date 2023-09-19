import React from 'react'
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import {
    LineChart,
    Line,
    Brush,
    AreaChart,
    Area
  } from "recharts";

import {dataPatient1} from './datatest'
import { dataEvolutionPatient } from './datatest'
const PatientsStats =()=> {
  return (
    <div>
        <div style={{ display: 'flex', flexDirection:'row', gap:'20px', justifyContent:'space-between' }}>
            <div style={{ display:'flex', flexDirection:'row', gap:'10px' }}>
                <div style={{ display:'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className='cart-stat-patient'>
                        <div style={{ display: 'flex', flexDirection:'row',
                            justifyContent: 'space-between' }}>
                            <div>
                                <p style={{ fontSize:'12px' }}>Nouveaux patients</p>
                                <p style={{fontSize: '16px', fontWeight:'bolder' }}>100+</p>
                                <p>Ce mois</p>
                            </div>
                            <div>
                                <PersonAddAlt1SharpIcon />
                            </div>        
                        </div>
                        <div>
                            grande image
                        </div>
                        
                    </div>
                    <div className='cart-stat-patient'>
                        <div style={{ display: 'flex', flexDirection:'row',
                            justifyContent: 'space-between' }}>
                            <div>
                                <p>Total des patients</p>
                                <p style={{fontSize: '16px', fontWeight:'bolder' }}>100+</p>
                                <p>Ce mois</p>
                            </div>
                            <div>
                                <GroupsSharpIcon />
                            </div>        
                        </div>
                        <div>
                            grande image
                        </div>
                        
                    </div>
                </div>
                
                <div style={{ display:'flex', flexDirection: 'column', gap: '10px' }}>
                <div className='cart-stat-patient'>
                        <div style={{ display: 'flex', flexDirection:'row',
                            justifyContent: 'space-between' }}>
                            <div>
                                <p>Consultation par patient</p>
                                <p style={{fontSize: '16px', fontWeight:'bolder' }}>100+</p>
                                <p>Ce mois</p>
                            </div>
                            <div>
                                <MeetingRoomSharpIcon />
                            </div>        
                        </div>
                        <div>
                            grande image
                        </div>
                        
                    </div>
                    <div className='cart-stat-patient'>
                        <div style={{ display: 'flex', flexDirection:'row',
                            justifyContent: 'space-between' }}>
                            <div>
                                <p>Taux de fidelisation</p>
                                <p style={{fontSize: '16px', fontWeight:'bolder' }}>100%</p>
                                <p>Ce mois</p>
                            </div>
                            <div>
                                <VerifiedSharpIcon />
                            </div>        
                        </div>
                        <div>
                            grande image
                        </div>
                        
                    </div>
                </div>
                
            </div>
{/* partie droite premiere ligne */}
            <div>
                <div>
                    Repartition des patients par lieux
                    <div>
                        <BarChart
                        width={550}
                        height={300}
                        data={dataPatient1}
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
                            <Bar dataKey="pv" fill="#04b9c9" background={{ fill: "#eee" }} />
                            </BarChart>
                    </div>
                </div>
            </div>
        </div>
{/* deuxieme ligne du composant graphique */}
        <div>
            <div>
                Evolution du nombre de patient
                <LineChart
                    width={1000}
                    height={300}
                    data={dataEvolutionPatient}
                    syncId="anyId"
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                    <Brush />
                </LineChart>
            </div>
        </div>
    </div>
  )
}

export default PatientsStats