import React, { useState, useEffect } from "react";
import { Box, Skeleton, TextField, Typography } from "@mui/material";
import styles from "./style";


const CustomGeoInput = ({
  label,
  error,
  register,
  type = "text",
  placeholder,
  value,
  onChange,
  initialising = false
}) => {
  const [localvalue, setLocalValue] = useState("{}");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  useEffect(()=>{
    try{
      let location = typeof register.value == "object"? register.value : JSON.parse(register.value);
      setLatitude(+location.latitude);
      setLongitude(+location.longitude);
    }catch(e){
  
    }
  },[register])
  console.log(register)
  useEffect(()=>{
    const payload = JSON.stringify({
      longitude,
      latitude
    })
    setLocalValue(payload);
    register.onChange({
      target: {
        value: payload,
        name: register.name
      }
    })
  },[longitude,latitude])
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      {initialising? <Skeleton sx={styles.input} style={{ height: "auto", minHeight: "1.4375em", height: "60px" }} /> :<Box> <input type="text" {...register} hidden value={localvalue} />
      <TextField
        type={'number'}
                
        error={error ? true : false}
        helperText={error?.message}
        size="small"
        inputProps={{
          step: 'any',
        }}
        defaultValue={longitude}
        sx={styles.input}
        placeholder={"latitude"}
        
        onChange={(e) => {
          
          setLongitude(e.target.value)
        }}
      />{"   "}<TextField
      type={'number'}
      
      error={error ? true : false}
      
      size="small"
      inputProps={{
        step: 'any',
      }}
      sx={styles.input}
      placeholder={"longitude"}
      defaultValue={latitude}      
      onChange={(e) => {
        
        setLatitude(e.target.value)
      }}
    /></Box>}
    </Box>
  );
};
export default CustomGeoInput;
