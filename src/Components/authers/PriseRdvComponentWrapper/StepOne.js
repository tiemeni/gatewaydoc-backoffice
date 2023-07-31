import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE} from '../../../Constants/fieldTypes';
import SelectWithOption from "./FormsComponents/SelectWithOption";
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, MenuItem, Select } from "@mui/material";
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
import { getPraticiens } from "../../../REDUX/praticiens/actions";

function StepOne( { next = ()=>{}, visible= ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const [level, setLevel] = React.useState(0);
   
    const classes = styles();
    const items = [{}];

    const { register, handleSubmit, watch, control, formState, getValues  } = useForm();
    useEffect(()=>{
        visible({
            next: false,
            prev: false
        });
    },[])
    
    useEffect(()=>{
        if(level == 5){
            visible({
                next: true,
                prev: true
               })
        }else{
            visible({
                next: false,
                prev: false
               })
        }

    },[level]);
    const fieldsByLevel = {
        "profession": {
            level: 0
        },
        "motif": {
            level: 1
        },
        "lieu": {
            level: 2
        },
        "praticien": {
            level: 3
        }
    }
    React.useEffect(() => {
    
        const subscription = watch((values, { name, type }) =>{
            console.log(values, name, type)
        
            if(!values[name]){
                
                setLevel(fieldsByLevel[name].level)
            }else if(level <= fieldsByLevel[name].level){
                setLevel(level + 1);
            }
        
    })
    return () => subscription.unsubscribe()
    }, [watch])

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
    const motifList = useSelector((state) => state.Motifs.data);
    const praticienList = useSelector((state) => state.Praticiens.data);
    const getRessources = async () => {
      
      if (!(motifList && motifList.data && motifList.data.length > 0)){
        dispatch(getAllMotif());
      }
      if (!(praticienList && praticienList.data && praticienList.data.length > 0)){
        dispatch(getPraticiens());
      }
      
    };
    
    

    useEffect(()=>{
        getRessources()
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
                        
                        {
                            level  >= 0 ? <Grid item xs={12}>
                            <BasicFormControl  label="Quel est la profession ?"  Input={SelectWithOption} props={{  options: motifList && motifList.data || [], value: getValues("profession"), ...register('profession',{ required: true }), placeholder: 'Profession' }} />
                        </Grid>: []
                        }
                        {
                            level  >= 1 ?
                            <Grid item xs={12}>
                                <BasicFormControl label="Quel est le motif de la consultation ?"  Input={SelectWithOption} props={{ value: getValues("motif"), options: motifList && motifList.data || [], ...register("motif"), placeholder: 'Motif' }} />
                            </Grid>
                            :[]
                        }
                        {
                            level  >= 2 ? <Grid item xs={12}>
                                <BasicFormControl label="Quel est le lieu de rendez vous ?"  Input={SelectWithOption} props={{ value: getValues("lieu"), options: motifList && motifList.data || [], ...register("lieu"), placeholder: 'Lieu du rendez vous' }} />
                            </Grid>:[]
                        }
                        {
                            level  >= 3 ?
                            <Grid item xs={12}>
                                <BasicFormControl label="Avec quel praticien ?" Input={SelectWithOption} props={{ value: getValues("praticen"), options: motifList && motifList.data || [], ...register("praticien"), placeholder: 'Praticien' }} />
                            </Grid>
                            : []
                        }

                        
                    </Grid>
                    {
                            level  >= 4 ? <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <BasicFormControl  label='Date de debut'  Input={StyledInput} props={{ value: getValues("date_debut"),...register("date_debut") , type: DATE, placeholder: 'Date debut' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl  label='Jour'  Input={SelectWithOption} props={{ value: getValues("jour"),...register("jour"), placeholder: 'Nom' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl  label='Creneau horaire'  Input={SelectWithOption} props={{ value: getValues("heure"), ...register("heure"), placeholder: 'Nom' }} />
                            </Grid>    
                            <Grid item xs={4}>
                                <BasicFormControl label='Periode'  Input={StyledInput} props={{ value: getValues('periode'), ...register("periode"), placeholder: 'Nom' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl label='Creneau horaire'  Input={SelectWithOption} props={{ value: getValues('interval'), ...register("interval"), placeholder: 'Nom' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <Button className={classes.search} variant="contained"  color="primary" size="medium"  startIcon={<SearchIcon />}>
                                        Rechercher
                                </Button>
                            </Grid>
                        </Grid>: []
                    }
                        
                    
                    
                </Grid>
                <Grid item xs={6}>
                    {
                            level  >= 5 ?
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
                        </InfiniteScroll>:[]
                    }    
                </Grid>
      </Grid>
      </form>    
    )
}

export default StepOne;