import StyledLabel from "./StyledLabel";
import StyledHelperText from './StyledHelperText';
import { FormControl } from "@mui/material";

function BasicFormControl( { Input, label="", control = { }, props={} }) {
    return (
      <FormControl {...control} fullWidth>
        <StyledLabel>{label}</StyledLabel>
        <Input {...props}/>
        <StyledHelperText />
      </FormControl>
    );
  }

export default BasicFormControl;