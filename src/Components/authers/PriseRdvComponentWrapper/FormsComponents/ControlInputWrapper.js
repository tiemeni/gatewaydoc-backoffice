import { useFormControlContext } from "@mui/base";
import React from "react";





function ControlInputWrapper({ Input,  ...props },ref=(r)=>{}){
   
    const formControlContext = useFormControlContext();
    React.useEffect(() => {
        if (formControlContext?.filled) {
          
        }
        
    }, [formControlContext]);
    return <Input ref={ref} {...props} ></Input>
}

export default React.forwardRef(ControlInputWrapper);