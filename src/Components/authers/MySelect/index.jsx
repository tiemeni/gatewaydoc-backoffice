import React from 'react';
import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import styles from "./style";

const MySelect = ({ error, register, label, fieldData = [], value }) => {
  const [val, setVal] = React.useState(value);
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      <Box sx={styles.input}>
        <Select
          {...register}
          error={error ? true : false}
          size="small"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          fullWidth
        >
          {fieldData?.map((d) => (
            <MenuItem key={d._id} value={d._id}>
              {d.title || d.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText sx={styles.helperText}>{error?.message}</FormHelperText>
      </Box>
    </Box>
  );
};

export default MySelect;
