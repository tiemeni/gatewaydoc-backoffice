import 'react-phone-input-2/lib/material.css';
import InputColor from 'react-input-color';
import React from 'react';


function InputColorPreview ({ name="", value="#5e72e4", onChange=console.log }){
    const [color, setColor] = React.useState({ hex: value});
    
    return <div>
      <input name={name} value={color.hex} hidden onChange={onChange} />
      <InputColor
        initialValue={value}
        onChange={setColor}
        placement="right"
      /> 
  </div>
}







export default InputColorPreview


