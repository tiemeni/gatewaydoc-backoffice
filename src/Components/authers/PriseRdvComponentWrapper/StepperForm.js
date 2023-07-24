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
    component: StepOne
  },
  1: {
    component: StepTwo
  }
}
export default function HorizontalLinearAlternativeLabelStepper() {
  const classes = styles();
  const [step, setStep] =  React.useState(0);
  const Component = bySteps[step].component;
  const next = ()=>{
    setStep((step + 1) % steps.length );
  }
  const prev = ()=>{
    setStep(Math.abs((step - 1) % steps.length) )
  }
  return (
    <Box  className={classes.stepper}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Component  next={next} prev={prev} />     

      <Button onClick={()=>prev()}>Prev</Button><Button onClick={()=>next()}>Next</Button>
    </Box>
  );
}