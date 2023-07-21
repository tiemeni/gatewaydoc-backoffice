import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { TextareaAutosize } from '@mui/base';
import Input, { inputClasses } from '@mui/base/Input';
import FormControl, { useFormControlContext } from '@mui/base/FormControl';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { ColorPicker } from 'mui-color';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import * as fieldTypes from '../../../Constants/fieldTypes';
import { MuiTelInput } from 'mui-tel-input';
import CustomInput from '../../../Components/authers/CustomInput/';
import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from 'react-redux';
import { getCivilities } from "../../../REDUX/commons/actions";
import { getAllCivilities } from "../../../services/commons";
import { MenuItem } from '@mui/material';


const StyledSelect = styled((props)=><select {...props}/>)(
  ({ theme }) => `
  
  .${inputClasses.input} {
    width: 100%;
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
`)

function BasicFormControl( { Input, label="", control = { }, props={} }) {
  return (
    <FormControl {...control}>
      <Label>{label}</Label>
      <Input {...props}/>
      <HelperText />
    </FormControl>
  );
}



function SelectWithOption({ options = [], ...props }) {
  
  return (
    <StyledSelect style={{
      width: "100%",
      fontSize: "0.875rem",
      fontFamily: "IBM Plex Sans,sans-serif",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#1A2027",
      background: "#F3F6F9",
      border: "1px solid #CDD2D7",
      borderRadius: "8px",
      padding: "12px 12px"
    }}   {...props}>
      {
        options.map((option, index)=><option key={index} value={option.id}>{option.label}</option>)
      }
     
    </StyledSelect>
  );
}
const StyledInput = styled(Input)(
  ({ theme }) => `
  
  .${inputClasses.input} {
    width: 100%;
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




const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100%;
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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
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

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
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

function PriseRdvComponent() {
  const [phone, setPhone] = React.useState('')

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }
  const onSubmit = (e)=>{
    e.preventDefault();
  }
  const dispatch = useDispatch();
  const civList = useSelector((state) => state.Common.civilities);
  
  const getCiv = async () => {
    const civilities = await getAllCivilities();
    
    if (civilities.success !== true) return;
    dispatch(getCivilities(civilities.data));
  };
  useEffect(()=>{
    getCiv()
  },[]);
  return (
    <form  onSubmit={onSubmit}>
    <Grid container spacing={2} style={{ padding: "12px" }}>
      <Grid item xs={12}>
        <h4 >Prise de rendez vous</h4>
      </Grid>                
      <Grid item xs={12}>
      <Grid container spacing={1}>
      <Grid item xs={4} >
      

        <BasicFormControl  Input={SelectWithOption} props={{ name: 'civility', options: civList, placeholder: 'Civilete' }} />
      </Grid>
      <Grid item xs={4}>
        
        <BasicFormControl  Input={StyledInput} props={{ name: 'name', placeholder: 'Nom' }} />
      </Grid>
      <Grid item xs={4}>
        <BasicFormControl  Input={StyledInput} props={{ name: 'surname', placeholder: 'Prenom' }} />

      </Grid>
      <Grid item xs={12}>
        <BasicFormControl  Input={StyledInput} props={{ name: 'birthdayname', placeholder: 'Non de naissance' }} />
        
      </Grid>

      <Grid item xs={12}>
        

        <BasicFormControl  Input={StyledInput} props={{ name: 'adress', placeholder: 'Adress' }} />
      </Grid>
      <Grid item xs={6}>
          

          <BasicFormControl  Input={StyledInput} props={{ name: 'codePostal', placeholder: 'Code postal' }} />
      </Grid>
      <Grid item xs={6}>
          

          <BasicFormControl  Input={StyledInput} props={{ name: 'ville', placeholder: 'Ville' }} />
      </Grid>
      <Grid item xs={5}>
          
          <BasicFormControl  Input={MuiTelInput} props={{ name: 'mobiletel', disabled: false, defaultCountry: "CM",  variant: "outlined",  langOfCountryName: "fr", placeholder: 'tel Mobile' }} />
      </Grid>
      <Grid item xs={2}>
          Icon
      </Grid>
      <Grid item xs={5}>
          

          <BasicFormControl  Input={MuiTelInput} props={{ name: 'tel', defaultCountry: "CM", value: "897987989", onChange: console.log,   variant: "outlined", langOfCountryName: "fr" , placeholder: 'Tel Fixe' }} />
      </Grid>
      <Grid item xs={12}>
          
        <BasicFormControl  Input={StyledInput} props={{ name: 'email', type: 'email', placeholder: 'Email' }} />
      </Grid>
      <Grid item xs={4}>
          
          <BasicFormControl  Input={StyledInput} props={{ name: 'birthdate', type: 'date', placeholder: 'Date naissnace' }} />
      </Grid>
      <Grid item xs={4}>
        <BasicFormControl  Input={StyledInput} props={{ name: 'securityNumber', type: 'text', placeholder: 'N de securite sociale' }} />  
          
      </Grid>
      <Grid item xs={4}>
           
          <BasicFormControl  Input={StyledInput} props={{ name: 'assurance', type: 'text', placeholder: 'Assurance' }} />
      </Grid>
      <Grid item xs={6}>
          <BasicFormControl  Input={StyledInput} props={{ name: 'medecin', type: 'text', placeholder: 'Medecin Traitant' }} />
      </Grid>
      <Grid item xs={6}>
          <BasicFormControl  Input={StyledInput} props={{ name: 'medecin_traitant', type: 'text', placeholder: 'Ville du Medecin' }} />
      </Grid>
      <Grid item xs={6}>
          
          

          <BasicFormControl  Input={MuiColorInput} props={{ name: 'couleur_patient', placeholder: 'Couleur du Patient' }} />
      </Grid>
      <Grid item xs={6}>
          

          <BasicFormControl  Input={StyledInput} props={{ name: 'profession',  placeholder: 'Profession' }} />
      </Grid>
      
      <Grid item xs={12}>
        <BasicFormControl  Input={StyledTextarea} props={{ name: 'note', minRows: 4, maxRows: 6,   placeholder: 'Remarque' }} />
          
        
          
      </Grid>
  </Grid>
      </Grid>
    </Grid>
    </form>    
  )
}

export default PriseRdvComponent;
