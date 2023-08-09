import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import styles from './styles';
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';


import * as fieldTypes from '../../../Constants/fieldTypes';
import { MuiTelInput } from 'mui-tel-input';
import CustomInput from '../../../Components/authers/CustomInput/';
import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from 'react-redux';
import { getCivilities } from "../../../REDUX/commons/actions";
import { getAllCivilities } from "../../../services/commons";
import { MenuItem } from '@mui/material';

import InputColorPreview from '../InputColorPreview';
import "./style.css";
import BasicFormControl from './FormsComponents/BasicFormControl';
import StyledInput from './FormsComponents/StyledInput';

import SelectWithOption from './FormsComponents/SelectWithOption';
import StyledTextarea from './FormsComponents/StyledTextarea';
import CustomPhoneInput from './FormsComponents/CustomPhoneInput';
import professions, { save } from "../../../REDUX/professions/actions";
import { getAllProfessions } from '../../../services/professions';
import profession from '../../../Utils/transformers/profession';
import CustomAutocomplete from './FormsComponents/CustomAutocomplete';
import civility from '../../../Utils/transformers/civility';

function StepTwo({ data= {}, save = ()=>{}, visible= ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const [values, setValues] = React.useState({...data});
    const classes = styles();
    const { register, handleSubmit, watch, control, formState, getValues, setValue  } = useForm({
      defaultValues: {
        ...data,
      },
    });
    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }
    const onSubmit = (e)=>{
      e.preventDefault();
    }
    const dispatch = useDispatch();
    const civList = useSelector((state) => state.Common.civilities);
    const professionList = useSelector((state) => state.Professions.data);
    
    
    const getCiv = async () => {
      const civilities = await getAllCivilities();
      
      if (civilities.success !== true) return;
      dispatch(getCivilities(civilities.data));
    };
    const getRessources = async () => {
    
      if (!(professionList && professionList.data && professionList.data.length > 0)){
        dispatch(professions.loading());
        try{
            const data = await getAllProfessions()
            dispatch(professions.save(data));
        }catch(e){
            dispatch(professions.loadingError(e));
        }
      }


      getCiv()
        
    };
    
    useEffect(()=>{
      getRessources()
    },[]);

    React.useEffect(() => {
    
      const subscription = watch((values, { name, type }) =>{
          
            
        setValues(values)
        save(values)
         
        //setValue(name, values[name]);
      
  })
  return () => subscription.unsubscribe();
  }, [watch])
    React.useEffect(()=>{
      if(values['civility']&&values['email']){
        visible({
          next: false,
          prev: true,
          submit: true
         })
      }
    },[values])
    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ padding: "12px" }}>
        <Grid item xs={12}>
          <h4 >Prise de rendez vous</h4>
        </Grid>                
        <Grid item xs={12}>
        <Grid container spacing={1}>
        <Grid item xs={4} >
        
  
          <BasicFormControl  Input={SelectWithOption} props={{ value: values["civility"],...register('civility'), options: civList.flatMap(civility.toListItem), placeholder: 'Civilete' }} />
        </Grid>
        <Grid item xs={4}>
          
          <BasicFormControl  Input={CustomAutocomplete} props={{ value: values["name"],...register('name'), placeholder: 'Nom' }} />
        </Grid>
        <Grid item xs={4}>
          <BasicFormControl  Input={StyledInput} props={{ value: values["surname"],...register('surname'), placeholder: 'Prenom' }} />
  
        </Grid>
        <Grid item xs={12}>
          <BasicFormControl  Input={StyledInput} props={{  value: values["birthdayname"],...register('birthdayname'), placeholder: 'Non de naissance' }} />
          
        </Grid>
  
        <Grid item xs={12}>
          <BasicFormControl  Input={StyledInput} props={{ value: values["adress"],...register('adress'), placeholder: 'Adress' }} />
        </Grid>
        <Grid item xs={6}>
            <BasicFormControl  Input={StyledInput} props={{ value: values["codePostal"],...register('codePostal'), placeholder: 'Code postal' }} />
        </Grid>
        <Grid item xs={6}>
            <BasicFormControl  Input={StyledInput} props={{ value: values["ville"],...register('ville'), placeholder: 'Ville' }} />
        </Grid>
        <Grid item xs={5}>
            
            <BasicFormControl  Input={CustomPhoneInput} props={{ value: values["mobiletel"], ...register('mobiletel'), disabled: false, country: "CM",  variant: "outlined",  langOfCountryName: "fr", placeholder: 'tel Mobile' }} />
        </Grid>
        <Grid item xs={2}>
            Icon
        </Grid>
        <Grid item xs={5}>
            
  
            <BasicFormControl  Input={CustomPhoneInput} props={{ value: values["fixetel"],...register('fixetel'), country: "CM",     variant: "outlined", langOfCountryName: "fr" , placeholder: 'Tel Fixe' }} />
        </Grid>
        <Grid item xs={12}>
            
          <BasicFormControl  Input={StyledInput} props={{ value: values["email"],...register('email'), type: 'email', placeholder: 'Email' }} />
        </Grid>
        <Grid item xs={4}>
            
            <BasicFormControl  Input={StyledInput} props={{ value: values["birthdate"],...register('birthdate'), type: 'date', placeholder: 'Date naissnace' }} />
        </Grid>
        <Grid item xs={4}>
          <BasicFormControl  Input={StyledInput} props={{ value: values["securityNumber"],...register('securityNumber'), type: 'text', placeholder: 'N de securite sociale' }} />  
            
        </Grid>
        <Grid item xs={4}>
             
            <BasicFormControl  Input={StyledInput} props={{ value: values["assurance"],...register('assurance'), type: 'text', placeholder: 'Assurance' }} />
        </Grid>
        <Grid item xs={6}>
            <BasicFormControl  Input={StyledInput} props={{ value: values["medecin"],...register('medecin'), type: 'text', placeholder: 'Medecin Traitant' }} />
        </Grid>
        <Grid item xs={6}>
            <BasicFormControl  Input={StyledInput} props={{ value: values["medecin_traitant"],...register('medecin_traitant'), type: 'text', placeholder: 'Ville du Medecin' }} />
        </Grid>
        <Grid item xs={6}>
           <BasicFormControl  Input={InputColorPreview} props={{ value: values["couleur_patient"],...register('couleur_patient'), initialValue: "#5e72e4", placeholder: 'Couleur du Patient' }} />
        </Grid>
        <Grid item xs={6}>
            
  
            <BasicFormControl  Input={StyledInput} props={{ value: values["profession"],...register('profession'),  placeholder: 'Profession' }} />
        </Grid>
        
        <Grid item xs={12}>
          <BasicFormControl  Input={StyledInput} props={{ value: values["note"],...register('note'), multiline: true, minRows: 4, maxRows: 6,   placeholder: 'Remarque' }} />           
        </Grid>
    </Grid>
        </Grid>
      </Grid>
      </form>    
    )
}

export default StepTwo;