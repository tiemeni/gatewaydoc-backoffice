import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import styles from './styles';
import { Button } from '@mui/material';

const steps = [
  'RDV disponible',
  'Informations Patient',
];

const bySteps = {
  0: {
    component: StepOne,
    navigation: {
      'prev': false,
      'next': true
    }
  },
  1: {
    component: StepTwo,
    navigation: {
      'prev': true,
      'next': true
    }
  }
}
export default function HorizontalLinearAlternativeLabelStepper() {
  const classes = styles();
  const [step, setStep] =  React.useState(0);
  const [visibles, setVisibles] =  React.useState({
    'prev': false,
    'next': true
  });
  const Component = bySteps[step].component;
  const next = ()=>{
    setStep((step + 1) % steps.length );
  }
  const prev = ()=>{
    setStep(Math.max(0,(step - 1) % steps.length) )
  }
  const visible = (obj)=>{
    setVisibles(obj)
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
      <Component  next={next} prev={prev} visible={visible} />     
      {
        visibles['prev'] ? <Button onClick={()=>prev()}>Prev</Button> : []
      }    
      {
        visibles['next'] ? <Button onClick={()=>next()}>Next</Button> : []
      }
      
    </Box>
  );
}