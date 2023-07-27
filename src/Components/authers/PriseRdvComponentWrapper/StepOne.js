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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularIndeterminate from "./CircularIndeterminate";
import { useForm } from "react-hook-form";

function StepOne( { next = ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const classes = styles();
    const items = [{}];
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
      
      if (motifsList && motifsList.data && motifsList.data.length > 0) return;
      dispatch(getAllMotif());
    };
    useEffect(()=>{
      getMotifs()
    },[]);

    
    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      
      <Grid container  style={{ padding: "12px" }}>
     

                
                    
               
                <Grid item xs={6}>
                    <Grid container spacing={1} style={{
                        padding: 15 
                    }}>
                        <Grid item xs={12}>
                            <h4 >Premiere disponibilite</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <BasicFormControl label="Quel est la profession ?"  Input={SelectWithOption} props={{ name: 'name' , ...register('name'), placeholder: 'Nom' }} />
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
                    
                    <InfiniteScroll
                        dataLength={items.length-1}
                        next={fetchMoreData}           
                        hasMore={false}
                        loader={<CircularIndeterminate/>}
                        >    
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>    
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                </ListItem>
                            </List>
                        </InfiniteScroll>

                </Grid>
      </Grid>
      </form>    
    )
}

export default StepOne;