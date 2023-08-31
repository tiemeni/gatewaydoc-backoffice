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

const MySelect = ({ error, register, label, fieldData = [], value, initialising= true }) => {
  const [val, setVal] = React.useState(value);
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      {initialising? <Skeleton sx={styles.input} style={{ height: "auto", minHeight: "1.4375em", height: "60px" }} /> :<Box sx={styles.input}>
        <Select
          {...register}
          error={error ? true : false}
          size="small"
          fullWidth
        >
          {fieldData?.map((d) => (
            <MenuItem key={d._id} value={d._id}>
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
