import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./style";

const CustomRadio = ({ control, label, name }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}*</Typography>
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <RadioGroup row {...field}>
              <FormControlLabel value={true} control={<Radio />} label="Oui" />
              <FormControlLabel value={false} control={<Radio />} label="Non" />
            </RadioGroup>
          );
        }}
      />
    </Box>
  );
};

export default CustomRadio;
