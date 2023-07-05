import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./style";

const AutoComplete = ({ register, error, label, onChange }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      <Autocomplete
        {...register}
        freeSolo
        multiple
        options={["Option 1", "Option 2", "Option 3"]}
        size="small"
        sx={styles.input}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error ? true : false}
            helperText={error}
          />
        )}
      />
    </Box>
  );
};

export default AutoComplete;
