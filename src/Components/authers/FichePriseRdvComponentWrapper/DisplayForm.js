import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE, NUMBER} from '../../../Constants/fieldTypes';
import SelectWithOption from "./FormsComponents/SelectWithOption";
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./styles";
import motifs from "../../../REDUX/motifs/actions";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularIndeterminate from "./CircularIndeterminate";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import StyledSelect from "./FormsComponents/StyledSelect";
import StyledTextarea from "./FormsComponents/StyledTextarea";
import PhoneInput from "react-phone-input-2";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import 'react-phone-input-2/lib/bootstrap.css'
import { getAllMotif, motifsByProfession } from "../../../services/motifs";
import CustomDateInput from "./FormsComponents/CustomDateInput";
import dayjs from "dayjs";
import CustomTimeInput from "./FormsComponents/CustomTimeInput";
import motif from "../../../Utils/transformers/motif";
import { Chip } from '@mui/material';
import { deleteRDV } from '../../../services/rdv';
import { showPFRDV } from "../../../REDUX/commons/actions";


function DisplayForm( { next = ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const event = useSelector(state => state.Common.event);
    const eventData = useSelector(state => (state.Calendar.events || []).filter((e)=>e._id == event._def.extendedProps._id)[0]);
   
    const classes = styles();
    const items = [{}];
    const object = {
        medecin: event?._def?.extendedProps?.name,
        patient: event?._def?.extendedProps?.patient?.name,
        centre_name: "Centre Ophtalmologique",
        serveur_info: `Enregistrer par ${event?._def?.extendedProps?.provenance}. le lundi 24 juillet 2023`
    }
    const patient = {
        ...eventData?.patient
    }
    const { register, handleSubmit } = useForm();
    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }

    const fetchMoreData = ()=>{

    }
    const onSubmit = (e)=>{
      e.preventDefault();
      next();
    }
    
    const dispatch = useDispatch();
    const deleteEvent = ()=>{
        deleteRDV(eventData["_id"]).then(()=>{
            const event = new Event("ReloadEvent");
            window.dispatchEvent(event);
            dispatch(showPFRDV(false));
        }).catch(()=>{

        });
        
    }
    const close = ()=>{
        dispatch(showPFRDV(false));
    }
    const motifsList = useSelector((state) => state.Motifs.data);
    
    const getMotifs = async () => {
      
      if(!(motifsList && motifsList.data && motifsList.data.length > 0)){

        dispatch(motifs.loading());
        try{
            const data = await getAllMotif()
            dispatch(motifs.save(data));
        }catch(e){
            dispatch(motifs.loadingError(e));
        }
      }

    };
    useEffect(()=>{
      getMotifs()
    },[]);
    const loadMotifsByProfession = async ()=>{
       const prof = await motifsByProfession(eventData.resourceId)
    }
    useEffect(()=>{
        loadMotifsByProfession()
    },[event])


    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      
      <Grid container  style={{ padding: "12px" }}>
     

                
                    
               
                <Grid item xs={12}>
                    <Grid container spacing={1} style={{
                        padding: 15 
                    }}>
                        <Grid item xs={12}>

                            <Typography variant="h4"  gutterBottom>
                                Avec {object.medecin}
                            </Typography>
                            <Typography variant="h5"  gutterBottom>
                                 {object.centre_name}
                            </Typography>
                            <Divider orientation="horizontal"/>
                            <Typography variant="h6"  gutterBottom>
                                {object.serveur_info}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <BasicFormControl  label='Status'  Input={StyledInput} props={{ name: 'status', disabled: true, value: eventData.status, placeholder: 'status' }} />
                            {/*<BasicFormControl  label='Status du DRV'  Input={SelectWithOption} props={{ name: 'name' , placeholder: 'Nom' }} />*/}
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Motif'  Input={StyledInput} props={{ name: 'motif', disabled: true, value: eventData.motif, placeholder: 'status' }} />
                            {/*<BasicFormControl  label='Motif'  Input={SelectWithOption} props={{ name: 'motif', options: (motifsList && motifsList.data||[]).flatMap(motif.toListItem)  , placeholder: 'Nom' }} />*/}
                            <br/>
                            <Box mt={1}>
                                <Button variant="contained" size="medium">Plus de Motifs</Button>
                            </Box>
                        </Grid>    
                        <Grid item xs={3}>
                            <BasicFormControl  label='Date'  Input={CustomDateInput} props={{ name: 'date', disabled: true, value: dayjs(eventData.date), placeholder: 'date' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Patient'  Input={CustomTimeInput} props={{ name: 'startTime', value: dayjs(`2022-04-17T${eventData.timeStart}`),views: ['hours','minutes'], disabled: true, placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Reelle'  Input={CustomTimeInput} props={{ name: 'endTime', value: dayjs(`2022-04-17T${eventData.timeStart}`), disabled: true, views: ['hours','minutes'], disable: true , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Duree (en min.) '  Input={StyledInput} props={{ name: 'duration', value: eventData.duration, disabled: true , placeholder: 'Nom', type: NUMBER }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider orientation="horizontal"/>
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="h5"  gutterBottom>
                                Patient: {event?.extendedProps?.civ}  {event.title} <Button text> voire la fiche patient</Button>
                            </Typography>
                            <Typography variant="h6"  gutterBottom>
                                IPP: 
                            </Typography>
                          
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Telephone portable'  Input={PhoneInput} props={{ value: patient.telephone, disabled: true, name: 'telephone' , placeholder: '', label: '' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Telephone fixe '  Input={PhoneInput} props={{ name: 'fixe', disabled: true , placeholder: '', label: '' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Email '  Input={StyledInput} props={{ name: 'email', value: patient.email, disabled: true , placeholder: 'email' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <BasicFormControl  label='Date de naissance '  Input={CustomDateInput} props={{ name: 'birthdate', disabled: true, value: dayjs(patient.birthdate), type: DATE, placeholder: 'Birthdate' }} /> 
                        </Grid>
                        <Grid item xs={2} >
                            <Typography style={{ 'paddingTop': "40px"}}>{` ${dayjs().year() - dayjs(patient.birthdate).year()  } ans`}</Typography>
                             
                        </Grid>
                        
                        <Grid item xs={12}>
                            <BasicFormControl  label='Medecin Traitant '  Input={StyledInput} props={{ name: 'name', disabled: true, value: eventData.name , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl  label='Commentaire '  Input={StyledInput} props={{ name: 'commentaire', multiline: true , rows: 3, placeholder: 'Nom' }} />
                        </Grid>

                            <Grid item xs={3}>                
                                <Button variant="contained" color="secondary"  disableElevation>
                                Historique de RDV
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"  disableElevation>
                                Modifier le RDV
                                </Button>
                            </Grid>
                            <Grid item xs={2}>    
                                <Button variant="contained" color="warning" disableElevation>
                                    Deplacer
                                </Button>
                            </Grid>
                            <Grid item xs={2}>    
                                <Button variant="contained" color="error" onClick={deleteEvent} disableElevation>
                                    Supprimer
                                </Button>
                            </Grid> 
                            <Grid item xs={2}>   
                                <Button variant="contained" color="secondary" onClick={close} disableElevation>
                                    Fermer
                                </Button>
                            </Grid>
                            
                        </Grid>
                  
                    
                </Grid>
              
      </Grid>
      </form>    
    )
}

export default DisplayForm;