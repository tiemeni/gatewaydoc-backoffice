import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import styles from "./style";

const CustomInput = ({
  label,
  error,
  register,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  const [val, setVal] = React.useState(value);
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      <TextField
        type={type}
        {...register}
        error={error ? true : false}
        helperText={error?.message}
        size="small"
        sx={styles.input}
        placeholder={placeholder}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          onChange(e.target.value);
        }}
      />
    </Box>
  );
};
export default CustomInput;
