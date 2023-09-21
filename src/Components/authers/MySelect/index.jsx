import React from 'react';
import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import styles from "./style";


const MySelect = ({ error, register, label, fieldData = null, value, initialising= true, required= false }) => {

  const def = ()=>{
    if(register.multiple ){
      return [value];
    }
    return value;
  }
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}<Typography component={"span"} color="red">{ required || register.required ? "*": ""}</Typography></Typography>
      {initialising || !fieldData? <Skeleton sx={styles.input} style={{  minHeight: "1.4375em", height: "60px" }} /> :<Box sx={styles.input}>
        <Select
          {...register}
          
          defaultValue={ def()}
          error={error ? true : false}
          size="small"
          fullWidth
        >
          {fieldData?.map((d) => (
            <MenuItem key={d._id} value={d.value|| d._id}>
              {d.title || d.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText sx={styles.helperText}>{error?.message}</FormHelperText>
      </Box>}
    </Box>
  );
};

export default MySelect;
