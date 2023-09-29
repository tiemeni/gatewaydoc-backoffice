import 'react-phone-input-2/lib/bootstrap.css'
import InputColor from 'react-input-color';
import React from 'react';
import { Box, FormHelperText, Skeleton, Typography } from '@mui/material';
import styles from "./style";
import { GetColorName } from 'hex-color-to-color-name';

function InputColorLabel({ name="", error={}, initialising=true, register={}, value="#5e72e4", label, required, onChange=console.log }){
    const [color, setColor] = React.useState({ hex: value});
   
    return   <Box sx={styles.inputContainer}>
    <Typography sx={styles.label}>{label}</Typography>
    {initialising? <Skeleton sx={styles.input} style={{ minHeight: "1.4375em", height: "60px" }} /> :<Box sx={styles.input}>
      <div>
        <input name={name} {...register} value={color.hex} hidden onChange={onChange} />
        <InputColor
            initialValue={value}
            onChange={setColor}
            placement="right"
        />
        <Typography component={"span"}>{"  "}{GetColorName(color.hex.replace('#','').substring(0,6))}</Typography>
      </div>
      <FormHelperText sx={styles.helperText}>{error?.message}</FormHelperText>
    </Box>}
  </Box>
       
}
export default InputColorLabel;