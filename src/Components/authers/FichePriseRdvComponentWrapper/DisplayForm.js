import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE} from '../../../Constants/fieldTypes';
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
import { getAllMotif } from "../../../services/motifs";

function DisplayForm( { next = ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const event = useSelector(state => state.Common.event);
    const classes = styles();
    const items = [{}];
    const object = {
        medecin: event?._def?.extendedProps?.name,
        patient: event?._def?.extendedProps?.patient?.name,
        centre_name: "Centre Ophtalmologique",
        serveur_info: `Enregistrer par ${event?._def?.extendedProps?.provenance}. le lundi 24 juillet 2023`
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
                            <BasicFormControl  label='Status du DRV'  Input={SelectWithOption} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Motif'  Input={SelectWithOption} props={{ name: 'name' , placeholder: 'Nom' }} />
                            <br/>
                            <Box mt={1}>
                                <Button variant="contained" size="medium">Plus de Motifs</Button>
                            </Box>
                        </Grid>    
                        <Grid item xs={3}>
                            <BasicFormControl  label='Date'  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Patient'  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Reelle'  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Duree (en min.) '  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider orientation="horizontal"/>
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="h5"  gutterBottom>
                                Patient: {event.extendedProps.civ}  {event.title} <Button text> voire la fiche patient</Button>
                            </Typography>
                            <Typography variant="h6"  gutterBottom>
                                IPP: 
                            </Typography>
                          
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Telephone portable'  Input={PhoneInput} props={{ name: 'name' , placeholder: '', label: '' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Telephone fixe '  Input={PhoneInput} props={{ name: 'name' , placeholder: '', label: '' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Email '  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Date de naissance '  Input={StyledInput} props={{ name: 'name' , type: DATE, placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl  label='Medecin Traitant '  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl  label='Commentaire '  Input={StyledInput} props={{ name: 'name', multiline: true , rows: 3, placeholder: 'Nom' }} />
                        </Grid>

                            <Grid item xs={3}>                
                                <Button variant="contained"  disableElevation>
                                Historique de RDV
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" disableElevation>
                                Modifier le RDV
                                </Button>
                            </Grid>
                            <Grid item xs={2}>    
                                <Button variant="contained" disableElevation>
                                    Deplacer
                                </Button>
                            </Grid>
                            <Grid item xs={2}>    
                                <Button variant="contained" disableElevation>
                                    Supprimer
                                </Button>
                            </Grid> 
                            <Grid item xs={2}>   
                                <Button variant="contained" disableElevation>
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