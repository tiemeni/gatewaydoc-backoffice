import * as React from 'react';
import Header from '../authers/Header'
import FormControl, { useFormControlContext } from '@mui/base/FormControl';
import Input, { inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
  
 const StyledInput = styled(Input)(
    ({ theme }) => `
    
    .${inputClasses.input} {
      width: 60%;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
      border-radius: 8px;
      padding: 12px 12px;
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
        border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
      }
    }
  `,
  );
  
  const Label = styled(({ children, className }) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = React.useState(false);
  
    React.useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);
  
    if (formControlContext === undefined) {
      return <p>{children}</p>;
    }
  
    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;
  
    return (
      <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
        {children}
        {required ? ' *' : ''}
      </p>
    );
  })`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.2rem;
    margin-bottom: 4px;
  
    &.invalid {
      color: red;
    }
  `;
  
  const HelperText = styled((props) => {
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
  
    return showRequiredError ? <p {...props}>Ce champ est obligatoire</p> : null;
  })`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;
  
  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

const Centre=()=> {
  return (
    <div>
        <Header />
        <div style={{ backgroundColor:'#D3D3D3', paddingTop: "80px" }}>
            <p style={{ color:'black', fontSize: "25px", fontWeight: "bolder", padding:"0 0 10px 10px", color:'DimGray', marginBottom:0}}>Votre structure</p>
        </div>
        <div style={{ marginLeft:'1%', marginRight:'1%', paddingLeft:"1%", paddingRight:"1%" , backgroundColor:"#4a4945", borderRadius:"6px"}}>
            <p style={{ padding: '10px', color:"white" }}>Informations de votre srtucture</p>
        </div>
        <div style={{ paddingLeft:"10%", paddingRight:"1%" }}>
            <FormControl defaultValue="" required>
                <Label>Nom de la structure</Label>
                <StyledInput />
                <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
                <Label>Forme juridique</Label>
                <StyledInput />
                <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
                <Label>Raison sociale</Label>
                <StyledInput />
                <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
                <Label>Adresse</Label>
                <StyledInput />
                <HelperText />
            </FormControl>
            </div>
    </div>
  )
}

export default Centre