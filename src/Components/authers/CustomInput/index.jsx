import { Box, TextField, Typography } from "@mui/material";
import styles from "./style";

const CustomInput = ({ label, error, register, type = "text" }) => {
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
      />
    </Box>
  );
};
export default CustomInput;
