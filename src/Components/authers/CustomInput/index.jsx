import React from "react";
import { Box, Skeleton, TextField, Typography } from "@mui/material";
import styles from "./style";

const CustomInput = ({
  label,
  error,
  register,
  type = "text",
  placeholder,
  value,
  onChange,
  required=false,
  initialising = false
}) => {
 
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label} <Typography component={"span"} color="red">{ required || register.required ? "*": ""}</Typography> </Typography>
      {initialising? <Skeleton sx={styles.input} style={{ height: "auto", minHeight: "1.4375em", height: "60px" }} /> :<TextField
        type={type}
        {...register}
        error={error ? true : false}
        helperText={error?.message}
        size="small"
        sx={styles.input}
        placeholder={placeholder}
        
        onChange={(e) => {
          
          register.onChange(e);
        }}
      />}
    </Box>
  );
};
export default CustomInput;
