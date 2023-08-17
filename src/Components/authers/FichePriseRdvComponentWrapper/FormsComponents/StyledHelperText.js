import React from "react";
import FormControl, { useFormControlContext } from '@mui/base/FormControl';
import { styled } from '@mui/system';

const StyledHelperText = styled((props) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = React.useState(false);
  
    React.useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);
  
    if (formControlContext === undefined) {
      return null;
    }
  
    const { required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;
  
    return showRequiredError ? <p {...props}>This field is required.</p> : null;
  })`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
  `;
export default StyledHelperText;