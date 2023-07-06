import { Box, FormHelperText, MenuItem, Select, Typography } from "@mui/material";
import styles from "./style";

const MySelect = ({ error, register, label }) => {
    return (
      <Box sx={styles.inputContainer}>
        <Typography sx={styles.label}>{label}</Typography>
        <Box sx={styles.input}>
          <Select
            {...register}
            error={error ? true : false}
            size="small"
            fullWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText sx={styles.helperText}>{error?.message}</FormHelperText>
        </Box>
      </Box>
    );
  };

  export default MySelect