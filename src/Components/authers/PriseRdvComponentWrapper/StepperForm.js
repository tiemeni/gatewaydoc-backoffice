import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import styles from './styles';
import { Alert, Button } from '@mui/material';
import app from '../../../Configs/app';
import axios from "axios";
import { createPatient } from '../../../services/patients';
import { showPRDV } from '../../../REDUX/commons/actions';
import { saveError, saveStep } from '../../../REDUX/prgv/actions';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const stepsLabels = [
  'RDV disponible',
  'Informations Patient',
];

const bySteps = {
  0: {
    component: StepOne,
    navigation: {
      'prev': false,
      'next': false,
      'submit': false
    }
  },
  1: {
    component: StepTwo,
    navigation: {
      'prev': true,
      'next': false,
      'submit': false
    }
  }
}
export default function HorizontalLinearAlternativeLabelStepper() {
  const classes = styles();
  const { steps, error, praticienList } = useSelector((state)=>state.Prdv);
  const [step, setStep] = React.useState(0);
  const [data, setData] =  React.useState({});
  const [visibles, setVisibles] =  React.useState({
    'prev': false,
    'next': false,
    'submit': false
  });
  const Component = bySteps[step].component;
  const dispatch = useDispatch();
  const next = (stepData)=>{
    if(stepData){
      save(stepData)
    }
    
    
    dispatch(saveError(null));
    setStep((step + 1) % stepsLabels.length );
  }
  const save = (stepData) => {

    dispatch(saveStep(step, stepData))
  }
  const prev = ()=>{
    setStep(Math.max(0,(step - 1) % stepsLabels.length) )
  }
  const visible = (obj)=>{
    setVisibles(obj)
  }
  const submit = async ()=>{
    try{

      dispatch(saveError(null));
      let error = false;
      let patientId = steps[1]['patientId'];
      if(!patientId){
        const rep = await   createPatient ({active: true,...steps[1] });
        
        if(rep.success){
          patientId = rep.data._id;
          dispatch(saveStep(1, { ...steps[1], patientId}))
        }else{
          error = true;
          dispatch(saveError(rep));
        }

        
      }  
        
      if(patientId && !error){
          const p = (praticienList).filter((praticien)=>praticien._id === steps[0]?.praticien)[0];
          const rep = await  axios({

            method: "POST",
            url: BASE_URL + `/appointments/enregistrer_rdv/?idCentre=${app.idCentre}`,
            data: {
            
                "centre": app.idCentre,
                "practitioner": steps[0]?.praticien,
                "patient": patientId,
                "motif": steps[0]?.motif,
                "startTime": steps[0]?.disponibility?.start,
                "endTime": dayjs(`${steps[0]?.disponibility?.date}T${steps[0]?.disponibility?.start}`).add(p?.timeSlot,'m').format('HH:mm'),
                "date_long": steps[0]?.disponibility?.date_long,
                "provenance": app.platform,
                "duration": p?.timeSlot,
              // "dayOfWeek": 1,
                "date": steps[0]?.disponibility?.date,
            
            },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
          });
        if(rep.data.success){
          //patientId = rep.data._id;
          //setData({ ...data, [1]: { ...data[1], patientId }})
          dispatch(showPRDV(false));
          dispatch(saveStep(0, {  }));
          dispatch(saveStep(1, { }));
          
          toast.success('Le rendez vous a ete creer avec success');
          //dispatch(showPRDV(false));
        }else{
          dispatch(saveError(rep.data));

        }
        
      }

    }catch(e){
      
      dispatch(saveError(e));
    }
    

  }
  React.useEffect(()=>{
    let navigation = {...bySteps[step].navigation};
    if(step === 1 && data[1] && data[1]['name'] && data[1]['email']){
      navigation['submit'] = true;
    }
    setVisibles(navigation);
  },[step]);
 
  return (
    <Box  className={classes.stepper}>
      <Stepper activeStep={step} alternativeLabel>
        {stepsLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        error&& <Alert severity="error">{error?.message}</Alert>
      }
      
      <Component data={steps[step] || {}} save={save}  next={next} prev={prev} visible={visible} />     
      {
        visibles['prev'] ? <Button onClick={()=>prev()}>Etape precedente</Button> : []
      }    
      {
        visibles['next'] ? <Button onClick={()=>next()}>Etape suivante</Button> : []
      }
      {
        visibles['submit'] ? <Button onClick={()=>submit()}>Enregistrer</Button> : []
      }
    </Box>
  );
}