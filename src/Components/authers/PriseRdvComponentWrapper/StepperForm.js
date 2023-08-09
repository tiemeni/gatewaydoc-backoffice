import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import styles from './styles';
import { Button } from '@mui/material';
import app from '../../../Configs/app';
import axios from "axios";
import { createPatient } from '../../../services/patients';
import { showPRDV } from '../../../REDUX/commons/actions';
import { useDispatch } from 'react-redux';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const steps = [
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
  const [step, setStep] =  React.useState(0);
  const [data, setData] =  React.useState({});
  const [visibles, setVisibles] =  React.useState({
    'prev': false,
    'next': false,
    'submit': false
  });
  const Component = bySteps[step].component;
  const dispatch = useDispatch();
  const next = (stepData)=>{
    if(stepData)
    setData({ ...data, [step]: stepData})
    setStep((step + 1) % steps.length );
  }
  const save = (stepData) => {
    setData({ ...data, [step]: stepData})
  }
  const prev = ()=>{
    setStep(Math.max(0,(step - 1) % steps.length) )
  }
  const visible = (obj)=>{
    setVisibles(obj)
  }
  const submit = async ()=>{
    let patientId = data[1]['patientId'];
    if(!patientId){
      const rep = await   createPatient ({active: true,...data[1], name: 'test'});
      console.log(rep)
      patientId = rep.data._id
    }  
       
      axios({

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
    })
    .then((response) => {
      dispatch(showPRDV(false))      
      //      let disponibilities = response.data.data;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//        setDisponibilityList(disponibilities);                
    })
    .catch((error) => {
    
    });
  }
  React.useEffect(()=>{
    setVisibles(bySteps[step].navigation)
  },[step]);
  return (
    <Box  className={classes.stepper}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Component data={data[step] || {}} save={save}  next={next} prev={prev} visible={visible} />     
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