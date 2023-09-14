import React from 'react'
import {
    LineChart,
    Line,
    Brush,
    AreaChart,
    Area
  } from "recharts";
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { dataChargePatient } from './datatest'

const MedecinStats=()=> {
  return (
    <div>
        <div style={{ display: 'flex', justifyContent:'space-between' }}>
            <div style={{ display:'flex', flexDirection:'row', gap:'20px' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                    <div style={{ padding: '5px', display:'flex', flexDirection:'row', gap:'10px' }}>
                        <div className='blue-gradient' style={{ width:'50px', height:'50px',
                          display:'flex', alignItems:'center', justifyContent:'center',
                           borderRadius:'8px', boxShadow: "1px 2px 2px #00000025"  }}>
                            cxc
                        </div>
                        <div>
                            <p style={{ marginBottom:'0px'}}>Nombre total de praticiens</p>
                            <p style={{ fontWeight:'bolder', fontSize:'20px', marginTop:'0px' }}>10</p>
                        </div>
                    </div>

                    <div style={{ padding: '5px', display:'flex', flexDirection:'row', gap:'10px' }}>
                        <div className="orange-gradient" style={{ width:'50px', height:'50px',
                          display:'flex', alignItems:'center', justifyContent:'center',
                           borderRadius:'8px', boxShadow: "1px 2px 2px #00000025"  }}>
                            cxc
                        </div>
                        <div>
                            <p style={{ marginBottom:'0px'}}>Nombre de rdv par praticiens</p>
                            <p style={{ fontWeight:'bolder', fontSize:'20px', marginTop:'0px' }}>10</p>
                        </div>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                    <div className='medecin-hover' style={{ padding: '5px', display:'flex', flexDirection:'row', gap:'10px' }}>
                        <div className='blue-doctor' style={{ width:'50px', height:'50px',
                          display:'flex', alignItems:'center', justifyContent:'center',
                           borderRadius:'8px',boxShadow: "1px 2px 2px #00000025"  }}>
                            cxc
                        </div>
                        <div>
                            <p style={{ marginBottom:'0px'}}>Satifaction par praticien</p>
                            <p style={{ fontWeight:'bolder', fontSize:'20px', marginTop:'0px' }}>10</p>
                        </div>
                    </div>
                    <div style={{ padding: '5px', display:'flex', flexDirection:'row', gap:'10px' }}>
                        <div className='violet-gradient' style={{ width:'50px', height:'50px',
                          display:'flex', alignItems:'center', justifyContent:'center',
                           borderRadius:'8px', boxShadow: "1px 2px 2px #00000025"}} >
                            cxc
                        </div>
                        <div>
                            <p style={{ marginBottom:'0px'}}>Evolution rdv par particien</p>
                            <p style={{ fontWeight:'bolder', fontSize:'20px', marginTop:'0px' }}>10</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>Charge de travail des praticiens</div>
                <div>
                <LineChart
                    width={600}
                    height={300}
                    data={dataChargePatient}
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
                    {/* <Brush /> */}
                </LineChart>
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent:'space-between', marginTop:'20px' }}>
            <div>Temps moyen par consultation</div>
            <div>Répartition des spécialités</div>
        </div>
    </div>
  )
}

export default MedecinStats