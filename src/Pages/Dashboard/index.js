import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Dashboard as DashboardIcone   } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RdvStats from '../../Components/Stats/RdvStats';
import styles from '../Dashboard/style.js'
import PatientsStats from '../../Components/Stats/PatientsStats';
import MedecinStats from '../../Components/Stats/MedecinStats';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width:'100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',
      height: 'auto', width:'100vw', marginTop:'80px' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab icon={<DashboardIcone />} iconPosition="start" sx={{ textAlign:'left' }} label="Rendez-vous" {...a11yProps(0)} />
        <Tab icon={<AccountCircleIcon />} iconPosition="start" label="Patients" {...a11yProps(1)} />
        <Tab icon={<LocalHospitalIcon /> } iconPosition="start"  label="Médecins" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <RdvStats />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PatientsStats />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MedecinStats />
      </TabPanel>

    </Box>
  );
}