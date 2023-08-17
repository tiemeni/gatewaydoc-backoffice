import StyledLabel from "./StyledLabel";
import StyledHelperText from './StyledHelperText';
import { FormControl } from "@mui/material";
import ControlInputWrapper from "./ControlInputWrapper";
import Skeleton from '@mui/material/Skeleton';
function BasicFormControl( { Input, label="", loading = false, control = { }, props={} }) {
    
    return (
      <FormControl  fullWidth {...control} >
        <StyledLabel>{label}</StyledLabel>
         { loading ?  <Skeleton variant="rounded" width={"100%"} height={45} /> : <ControlInputWrapper Input={Input} {...props} ></ControlInputWrapper> }
        <StyledHelperText />
      </FormControl>
    );
  }

export default BasicFormControl;