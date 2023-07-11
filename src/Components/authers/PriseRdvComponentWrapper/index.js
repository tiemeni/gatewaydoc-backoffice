import React from 'react'
import Grid from '@mui/material/Grid';
import { TextareaAutosize } from '@mui/base';
import Input, { inputClasses } from '@mui/base/Input';
import FormControl, { useFormControlContext } from '@mui/base/FormControl';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { ColorPicker } from 'mui-color';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';


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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

function PriseRdvComponent() {
  return (
    <Grid container spacing={2} style={{ padding: "12px" }}>
      <Grid item xs={12}>
        <h4 >Prise de rendez vous</h4>
      </Grid>                
      <Grid item xs={12}>
      <Grid container spacing={1}>
      <Grid item xs={4} >
        
        <FormControl><Label>Civilite </Label> 
        <Select >
          <Option>{/* option one */}</Option>
          <Option>{/* option two */}</Option>
        </Select><Input type={'text'} /></FormControl>
      </Grid>
      <Grid item xs={4}>
        
        <FormControl><Label>Nom </Label><Input type={'text'} /></FormControl>
        
      </Grid>
      <Grid item xs={4}>
        
        <FormControl><Label>Prenom </Label><Input type={'text'} /></FormControl>
      </Grid>
      <Grid item xs={12}>
         
        <FormControl><Label>Non de naissance </Label><Input type={'text'}  /></FormControl>
      </Grid>

      <Grid item xs={12}>
        
        <FormControl><Label>Adress </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          <FormControl><Label>Code postal </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          <FormControl><Label>Ville </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={5}>
          
          <FormControl><Label>tel Mobile </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={2}>
          Icon
      </Grid>
      <Grid item xs={5}>
          
          <FormControl><Label>Tel Fixe </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={12}>
          
          <FormControl><Label>Email </Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={4}>
          
          <FormControl><Label>Date naissnace </Label><Input type={'date'} /></FormControl>
      </Grid>
      <Grid item xs={4}>
          
          <FormControl><Label>N de securite sociale </Label><Input type={'text'}  /></FormControl>
      </Grid>
      <Grid item xs={4}>
           
          <FormControl><Label>Assurance</Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          <FormControl><Label>Medecin Traitant</Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          
          <FormControl><Label>Ville du Medecin</Label><Input  /></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          
          <FormControl> <Label>Couleur du Patient</Label> <ColorPicker defaultValue="transparent"/></FormControl>
      </Grid>
      <Grid item xs={6}>
          
          <FormControl> <Label>Profession</Label> <Input  /></FormControl>
      </Grid>
      
      <Grid item xs={8}>
        <FormControl>
          <TextareaAutosize placeholder='Remarque' minRows={3} maxRows={10}></TextareaAutosize>
        </FormControl>
          
      </Grid>
  </Grid>
      </Grid>
    </Grid>
    
  )
}

export default PriseRdvComponent