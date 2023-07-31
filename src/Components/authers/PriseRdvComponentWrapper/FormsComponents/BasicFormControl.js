import StyledLabel from "./StyledLabel";
import StyledHelperText from './StyledHelperText';
import { FormControl } from "@mui/material";
import ControlInputWrapper from "./ControlInputWrapper";

function BasicFormControl( { Input, label="", control = { }, props={} }) {
    console.log(props)
    return (
      <FormControl  fullWidth {...control} >
        <StyledLabel>{label}</StyledLabel>
        
          <ControlInputWrapper Input={Input} {...props} ></ControlInputWrapper>
        <StyledHelperText />
      </FormControl>
    );
  }

export default BasicFormControl;