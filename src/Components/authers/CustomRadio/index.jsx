import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Skeleton
} from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./style";

const CustomRadio = ({ control, label, name, value = false, initialising = false, required, onChange=console.log }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}<Typography component={"span"} color="red">{ required ? " *": ""}</Typography></Typography>
      {initialising? <Skeleton sx={styles.input} style={{ height: "auto", minHeight: "1.4375em", height: "60px" }} /> :
      <Controller
       
        control={control}
        name={name}
        
        defaultValue={value}
        render={({ field }) => {
          return (
            <RadioGroup   row {...field}  onChange={(e, value) => {
              onChange({ target: { name, value }});
              field.onChange(e);
             
            }} >
              <FormControlLabel value={true} control={<Radio />} label="Oui" />
              <FormControlLabel value={false} control={<Radio />} label="Non" />
            </RadioGroup>
          );
        }}
      />}
    </Box>
  );
};

export default CustomRadio;
