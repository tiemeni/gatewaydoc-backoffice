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
import { getAllMotif } from "../../../REDUX/motifs/actions";


function StepOne(){
    const [phone, setPhone] = React.useState('');
    const classes = styles();
    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }
    const onSubmit = (e)=>{
      e.preventDefault();
    }
    
    const dispatch = useDispatch();
    const motifsList = useSelector((state) => state.Motifs.data);
    
    const getMotifs = async () => {
      
      if (motifsList && motifsList.data && motifsList.data.length > 0) return;
      dispatch(getAllMotif());
    };
    useEffect(()=>{
      getMotifs()
    },[]);
    console.log(classes , motifsList||[])
    
    return (
      <form className={classes.form} onSubmit={onSubmit}>
      
      <Grid container  style={{ padding: "12px" }}>
     

                
                    
               
                <Grid item xs={6}>
                    <Grid container spacing={1} style={{
                        padding: 15 
                    }}>
                        <Grid item xs={12}>
                            <h4 >Premiere disponibilite</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl label="Quel est la profession ?"  Input={SelectWithOption} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl label="Quel est le motif de la consultation ?"  Input={SelectWithOption} props={{ name: 'name', options: motifsList && motifsList.data || [], placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl label="Quel est le lieux de rendez vous ?"  Input={SelectWithOption} props={{ name: 'name', placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl label="Avec quel praticien ?" Input={SelectWithOption} props={{ name: 'name', placeholder: 'Nom' }} />
                        </Grid>    
                        
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <BasicFormControl  label='Date de debut'  Input={StyledInput} props={{ name: 'name' , type: DATE, placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <BasicFormControl  label='Jour'  Input={SelectWithOption} props={{ name: 'name', placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <BasicFormControl  label='Creneau horaire'  Input={SelectWithOption} props={{ name: 'name', placeholder: 'Nom' }} />
                        </Grid>    
                        <Grid item xs={4}>
                            <BasicFormControl label='Periode'  Input={StyledInput} props={{ name: 'name' , placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <BasicFormControl label='Creneau horaire'  Input={SelectWithOption} props={{ name: 'name', placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button className={classes.search} variant="contained"  color="primary" size="medium"  startIcon={<SearchIcon />}>
                                    Rechercher
                            </Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={6}>

                
                </Grid>
      </Grid>
      </form>    
    )
}

export default StepOne;