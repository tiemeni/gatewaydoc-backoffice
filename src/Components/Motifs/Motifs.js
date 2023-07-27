import React from 'react'
import Header from '../authers/Header'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MotifsTable from './MotifsTable';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color:'white' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const Motifs= () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [profession, setProfession] = React.useState('');
    const [libelle, setLibelle] = React.useState('');
    const [accessible, setLAccessible] = React.useState('');
    const [libellePatient, setLibellePatient] = React.useState('libelle');
    const [active, setActive] = React.useState('oui');

    const handleChangeAccordiion = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [age, setAge] = React.useState('');

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
      };
    const handleLibelleChange = (event) => {
        setLibelle(event.target.value);
    };

  return (<>
    <Header />
    <div style={{ backgroundColor:'#D3D3D3', paddingTop: "80px" }}>
        <p style={{ color:'black', fontSize: "25px", fontWeight: "bolder", padding:"0 0 10px 10px", color:'DimGray', marginBottom:0}}>Motifs de rdv</p>
    </div>
    <div>
        <div style={{ paddingLeft:"1%", paddingRight:"1%" }}>
            <Accordion style={{ marginTop:0, border:'none' }} expanded={expanded === 'panel1'} onChange={handleChangeAccordiion('panel1')}>
                <AccordionSummary style={{ backgroundColor:"#4a4945", borderRadius:"6px" }} aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{ fontSize: "1.5rem", color:"white" }}>Recherche d'un motif de rdv</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div>
                    <div style={{ minWidth: 120, fontSize: 40, display: 'flex', flexDirection:'column', gap:"20px" }}>
                        <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <FormControl style={{ width: '200px' }}>
                                <InputLabel id="profession" style={{ fontSize: "12px" }} >Profession</InputLabel>
                                <Select
                                labelId="profession"
                                id="profession"
                                value={profession}
                                label="profession"
                                onChange={handleProfessionChange}
                                style={{ fontSize: "12px" }} 
                                >
                                <MenuItem value={10} style={{ fontSize: "12px" }} >Cardiologue</MenuItem>
                                <MenuItem value={20} style={{ fontSize: "12px" }} >Neurologue</MenuItem>
                                <MenuItem value={30} style={{ fontSize: "12px" }} >Généraliste</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl style={{ width: '200px' }} >
                                <InputLabel id="libelle" style={{ fontSize: "12px" }}>Libéllé</InputLabel>
                                <Select
                                labelId="libelle"
                                id="libelle"
                                value={libelle}
                                label="libelle"
                                onChange={handleLibelleChange}
                                style={{ fontSize: "12px" }} 
                                >
                                <MenuItem value={10} style={{ fontSize: "12px" }}>Mal de tête</MenuItem>
                                <MenuItem value={20} style={{ fontSize: "12px" }}>Mal de dos</MenuItem>
                                <MenuItem value={30} style={{ fontSize: "12px" }}>Mal de nerf</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                              <FormControl style={{ width: '200px' }}>
                                  <InputLabel id="Accessible" style={{ fontSize: "12px" }} >Accessible Par</InputLabel>
                                  <Select
                                  labelId="Accessible"
                                  id="Accessible"
                                  value={accessible}
                                  label="Accessible"
                                  onChange={(e) => setLAccessible(e.target.value)}
                                  style={{ fontSize: "12px" }} 
                                  >
                                  <MenuItem value={'Internet'} style={{ fontSize: "12px" }} >Internet</MenuItem>
                                  <MenuItem value={'SMS'} style={{ fontSize: "12px" }} >SMS</MenuItem>
                                  <MenuItem value={'Appel'} style={{ fontSize: "12px" }} >Appel</MenuItem>
                                  <MenuItem value={'Tout'} style={{ fontSize: "12px" }} >Tout</MenuItem>
                                  </Select>
                              </FormControl>

                            <FormControl style={{ width: '200px' }} >
                                <InputLabel id="libellePatient" style={{ fontSize: "12px" }}>Libéllé patient</InputLabel>
                                <Select
                                labelId="libellePatient"
                                id="libellePatient"
                                value={libellePatient}
                                label="libellePatient"
                                onChange={(e)=>setLibellePatient(e.target.value)}
                                style={{ fontSize: "12px" }} 
                                >
                                <MenuItem value={'M'} style={{ fontSize: "12px" }}>M</MenuItem>
                                <MenuItem value={'Mm'} style={{ fontSize: "12px" }}>Mm</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <FormControl style={{ width: '200px' }}>
                                <InputLabel id="Activer" style={{ fontSize: "12px" }} >Activer</InputLabel>
                                <Select
                                labelId="Activer"
                                id="Activer"
                                value={active}
                                label="Activer"
                                onChange={(e)=> setActive(e.target.value)}
                                style={{ fontSize: "12px" }} 
                                >
                                <MenuItem value={'Oui'} style={{ fontSize: "12px" }} >Oui</MenuItem>
                                <MenuItem value={'Non'} style={{ fontSize: "12px" }} >Non</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>
                </AccordionDetails>
            </Accordion>
            <Button variant="contained" startIcon={<AddIcon />} style={{ marginTop: '20px', fontSize:"12px" }}>Créer un type de rdv</Button>
            <p style={{ marginTop: "12px", fontWeight: "bold" }}>17 Motifs de   RDV correspondants</p>
            <div style={{ backgroundColor:"#4a4945", borderRadius:"6px" }}> <p style={{ padding: "16px", color:"white" }}> Motifs des rdv</p> </div>

            <MotifsTable />
        </div>

    </div>
</>)
}

export default Motifs