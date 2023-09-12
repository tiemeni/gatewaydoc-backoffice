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
import patient from '../../../Utils/transformers/patient';
import { searchPatiens } from '../../../services/patients';

function StepTwo({ data= {}, save = ()=>{}, parentSubmit = ()=>{}, visible= ()=>{}, ...props }){
    const [phone, setPhone] = React.useState('');
    const [values, setValues] = React.useState({...data});
    const classes = styles();
    const { register, handleSubmit, watch, control, formState, getValues, setValue  } = useForm({
      defaultValues: {
        ...data,

      },
    });

    const onSubmit = (e)=>{
      e.preventDefault();
    }
    const dispatch = useDispatch();
    const civList = useSelector((state) => state.Common.civilities);
    const professionList = useSelector((state) => state.Professions.data);
   
    const userSelect = ({ value})=>{
      parentSubmit(value)
    }
    const getCiv = async () => {
      const civilities = await getAllCivilities();
      
      if (civilities.success !== true) return;
      dispatch(getCivilities(civilities.data));
    };
    const  resolve= async (term)=> {
      const patients = await searchPatiens(term)
      return patients?.data.flatMap(patient.toListItem);      
    }
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
    
      const subscription = watch((v, { name, type }) =>{
          
            let r = {...v,...values}
           
        setValues(r)
        save(r)
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
        
  
          <BasicFormControl label='Civilete' Input={SelectWithOption} props={{ value: values["civility"],...register('civility'), options: civList.flatMap(civility.toListItem), placeholder: 'Civilete' }} />
        </Grid>
        <Grid item xs={4}>
          <BasicFormControl label='Nom'  Input={CustomAutocomplete} props={{ value: values["name"], onSelect: userSelect, resolve  ,...register('name'), placeholder: 'Name' }} />
        </Grid>
        <Grid item xs={4}>
          <BasicFormControl label="Prenom"  Input={StyledInput} props={{ value: values["surname"], resolve,...register('surname'), placeholder: 'Prenom' }} />
  
        </Grid>
        <Grid item xs={12}>
          <BasicFormControl label="Nom de naissance"  Input={StyledInput} props={{  value: values["birthdayname"],...register('birthdayname'), placeholder: 'Nom de naissance' }} />
        </Grid>
  
        <Grid item xs={12}>
          <BasicFormControl label="Adresse"  Input={StyledInput} props={{ value: values["adress"],...register('adress'), placeholder: 'Adress' }} />
        </Grid>
        <Grid item xs={6}>
          <BasicFormControl label="Code postal" Input={StyledInput} props={{ value: values["codePostal"],...register('codePostal'), placeholder: 'Code postal' }} />
        </Grid>
        <Grid item xs={6}>
          <BasicFormControl label="Ville"  Input={StyledInput} props={{ value: values["ville"],...register('ville'), placeholder: 'Ville' }} />
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
            
          <BasicFormControl label='Email'  Input={StyledInput} props={{ value: values["email"],...register('email'), type: 'email', placeholder: 'Email' }} />
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
          <BasicFormControl label='Medecin Traitant'  Input={StyledInput} props={{ value: values["medecin"],...register('medecin'), type: 'text', placeholder: 'Medecin Traitant' }} />
        </Grid>
        <Grid item xs={6}>
          <BasicFormControl label='Ville du Medecin'  Input={StyledInput} props={{ value: values["medecin_traitant"],...register('medecin_traitant'), type: 'text', placeholder: 'Ville du Medecin' }} />
        </Grid>
        <Grid item xs={6}>
          <BasicFormControl label='Couleur du Patient'  Input={InputColorPreview} props={{ value: values["couleur_patient"],...register('couleur_patient'), initialValue: "#5e72e4", placeholder: 'Couleur du Patient' }} />
        </Grid>
        <Grid item xs={6}>
            
  
          <BasicFormControl label='Profession'  Input={StyledInput} props={{ value: values["profession"],...register('profession'),  placeholder: 'Profession' }} />
        </Grid>
        
        <Grid item xs={12}>
          <BasicFormControl label='Remarque'  Input={StyledInput} props={{ value: values["note"],...register('note'), multiline: true, minRows: 4, maxRows: 6,   placeholder: 'Remarque' }} />           
        </Grid>
    </Grid>
        </Grid>
      </Grid>
      </form>    
    )
}

export default StepTwo;