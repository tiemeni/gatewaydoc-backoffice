import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import styles from "./style";

const MySelect = ({ error, register, label, fieldData = [] }) => {
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
