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
import { saveStep } from '../../../REDUX/prgv/actions';
import { useDispatch, useSelector } from 'react-redux';

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
  const { steps } = useSelector((state)=>state.Prdv);
  const [step, setStep] = React.useState(0);
  const [error, setError] =  React.useState(null);
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
    
    
    setError(null);
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
      setError(null)
      let patientId = data[1]['patientId'];
      if(!patientId){
        const rep = await   createPatient ({active: true,...data[1] });
        
        if(rep.success){
          patientId = rep.data._id;
          setData({ ...data, [1]: { ...data[1], patientId }})
        }else{
          setError(rep)
        }

        
      }  
        
      if(patientId && !error){
          const rep = await  axios({

            method: "POST",
            url: BASE_URL + `/appointments/enregistrer_rdv/?idCentre=${app.idCentre}`,
            data: {
            
                "centre": app.idCentre,
                "practitioner": data[0].praticien,
                "patient": patientId,
                "motif": data[0].motif,
                "startTime": "08:00",
                "endTime": "10:00",
                "provenance": app.platform,
                "duration": 20,
              // "dayOfWeek": 1,
                "date": data[0].disponibility.date,
            
            },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        dispatch(showPRDV(false));
      }

    }catch(e){
      setError(e);
    }
    

  }
  React.useEffect(()=>{
    let navigation = {...bySteps[step].navigation};
    if(step === 1 && data[1] && data[1]['name'] && data[1]['email']){
      navigation['submit'] = true;
    }
    setVisibles(navigation)
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