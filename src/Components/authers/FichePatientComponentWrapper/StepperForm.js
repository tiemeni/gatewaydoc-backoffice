import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DisplayForm from './DisplayForm';
import StepTwo from './StepTwo';
import styles from './styles';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';

import StyledTab from './FormsComponents/StyledTab';
import StyledTabs from './FormsComponents/StyledTabs';

const steps = [
  'RDV disponible',
  'Informations Patient',
];

const bySteps = {
  0: {
    component: DisplayForm,
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
  const [step, setStep] =  React.useState(1);
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

      <StyledTabs value={0} onChange={console.log} aria-label="ant example">
          <StyledTab icon={<PersonIcon/>} iconPosition="start" label="Rendez-vous" />
          <StyledTab icon={<HistoryIcon/>} iconPosition="start" label="Historique de gestion" />
          
      </StyledTabs>
      <Component  next={next} prev={prev} visible={visible} />     
      
      
    </Box>
  );
}