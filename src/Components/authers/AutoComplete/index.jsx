import { Autocomplete, Box, Skeleton, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./style";

const AutoComplete = ({ register, error, label, onChange, initialising= false }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      {initialising? <Skeleton sx={styles.input} style={{ height: "auto", minHeight: "1.4375em", height: "60px" }} /> :<Autocomplete
        {...register}
        freeSolo
        multiple
        options={["Option 1", "Option 2", "Option 3"]}
        size="small"
        sx={styles.input}
        
        renderInput={(params) => (
          <TextField
            {...params}
            error={error ? true : false}
            helperText={error}
          />
        )}
      />}
    </Box>
  );
};

export default AutoComplete;
