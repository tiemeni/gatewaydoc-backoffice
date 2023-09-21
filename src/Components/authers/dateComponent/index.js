import React, { useEffect, useState } from 'react'
import { Colors } from '../../../Constants/colors';

function DateComponent() {
    const [date, setDate] = useState(new Date().toLocaleTimeString())
 
    useEffect(()=>{
        let id = setTimeout(() => {
            
            setDate(new Date().toLocaleTimeString());
        }, 1000)
        return ()=>{
            clearTimeout(id);
        }
    },[])
    return (
        <div style={{ color: Colors.white }}>{date}</div>
    )
}

export default DateComponent