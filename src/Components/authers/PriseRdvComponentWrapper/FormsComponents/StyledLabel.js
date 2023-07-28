import { styled } from '@mui/system';
import React from "react";
import clsx from 'clsx';
import { useFormControlContext } from '@mui/base/FormControl';
import style from './style';

const StyledLabel = styled(({ children, className, ...props }) => {
   
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = React.useState(false);
  
    React.useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);

    if (formControlContext === undefined) {
      return <p className={className}>{children}</p>;
    }
  
    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;
    
    return (
      <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
        {children}
        {required ? ' *' : ''}
      </p>
    );
  })(style.styleLabel);

export default StyledLabel;