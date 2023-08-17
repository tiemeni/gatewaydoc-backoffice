import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import styles from './styles';



import * as fieldTypes from '../../../Constants/fieldTypes';
import { MuiTelInput } from 'mui-tel-input';
import CustomInput from '../../../Components/authers/CustomInput/';
import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from 'react-redux';
import { getCivilities } from "../../../REDUX/commons/actions";
import { getAllCivilities } from "../../../services/commons";
import { MenuItem } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import InputColorPreview from '../InputColorPreview';
import "./style.css";
import BasicFormControl from './FormsComponents/BasicFormControl';
import StyledInput from './FormsComponents/StyledInput';

import SelectWithOption from './FormsComponents/SelectWithOption';
import StyledTextarea from './FormsComponents/StyledTextarea';


function StepTwo(){
    const [phone, setPhone] = React.useState('');
    const classes = styles();
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
    console.log(classes)
    return (
      <form className={classes.form} onSubmit={onSubmit}>
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
            
            <BasicFormControl  Input={PhoneInput} props={{ name: 'mobiletel', disabled: false, country: "CM",  variant: "outlined",  langOfCountryName: "fr", placeholder: 'tel Mobile' }} />
        </Grid>
        <Grid item xs={2}>
            Icon
        </Grid>
        <Grid item xs={5}>
            
  
            <BasicFormControl  Input={PhoneInput} props={{ name: 'tel', country: "CM", value: "897987989", onChange: console.log,   variant: "outlined", langOfCountryName: "fr" , placeholder: 'Tel Fixe' }} />
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
            
            
  
            <BasicFormControl  Input={InputColorPreview} props={{ name: 'couleur_patient', initialValue: "#5e72e4", placeholder: 'Couleur du Patient' }} />
        </Grid>
        <Grid item xs={6}>
            
  
            <BasicFormControl  Input={StyledInput} props={{ name: 'profession',  placeholder: 'Profession' }} />
        </Grid>
        
        <Grid item xs={12}>
          <BasicFormControl  Input={StyledInput} props={{ name: 'note', multiline: true, minRows: 4, maxRows: 6,   placeholder: 'Remarque' }} />
            
          
            
        </Grid>
    </Grid>
        </Grid>
      </Grid>
      </form>    
    )
}

export default StepTwo;