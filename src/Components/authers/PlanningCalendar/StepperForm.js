import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddTranches from './AddTranches';
import HistoriqueGestion from './HistoriqueGestion';
import styles from './styles';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';

import StyledTab from './FormsComponents/StyledTab';
import StyledTabs from './FormsComponents/StyledTabs';

const steps = [
  'Informations',
  'Liste des tranches memorisees',
];

const bySteps = {
  0: {
    component: AddTranches,
    navigation: {
      'prev': false,
      'next': true
    }
  },
  1: {
    component: HistoriqueGestion,
    navigation: {
      'prev': true,
      'next': true
    }
  }
}
export default function HorizontalLinearAlternativeLabelStepper({ title, praticien }) {
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
        {title}
      <StyledTabs value={0} onChange={console.log} aria-label="ant example">
          <StyledTab icon={<PersonIcon/>} iconPosition="start" label="Rendez-vous" />
          <StyledTab icon={<HistoryIcon/>} iconPosition="start" label="Historique de gestion" />
          
      </StyledTabs>
      <Component praticien={praticien} next={next} prev={prev} visible={visible} />     
      
      
    </Box>
  );
}