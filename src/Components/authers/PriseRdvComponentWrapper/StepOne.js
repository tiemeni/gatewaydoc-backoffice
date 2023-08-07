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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularIndeterminate from "./CircularIndeterminate";
import { useForm } from "react-hook-form";
import professions from "../../../REDUX/professions/actions";
import lieux from "../../../REDUX/lieux/actions";
import profession from "../../../Utils/transformers/profession";
import motif from "../../../Utils/transformers/motif";
import lieu from "../../../Utils/transformers/lieu";
import praticien from "../../../Utils/transformers/praticien";
import axios from "axios";
import app from "../../../Configs/app";
import { getAllProfessions } from "../../../services/professions";

import { getAllLieux } from "../../../services/lieux";


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
function StepOne( { next = ()=>{}, visible= ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const [values, setValues] = React.useState({});
    const [level, setLevel] = React.useState(0);
    const [praticienList, setPraticienList] = React.useState([]);
    const [motifList, setMotifList] = React.useState([]);

    const classes = styles();
    const items = [{}];
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const { register, handleSubmit, watch, control, formState, getValues, setValue  } = useForm({
        defaultValues: {
          motif: null,
          speciality: null,
          praticien: null,
          profession: null,
          lieu: null
        },
      });
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
    
    React.useEffect(() => {
    
        const subscription = watch((values, { name, type }) =>{
            
            let v = { ...values};
            for(let field in fieldsByLevel ){
                if(fieldsByLevel[name].level < fieldsByLevel[field].level){
                    v[field] = null;
                    
                }
            }
                        
            setValues(v)
            //setValue(name, values[name]);
        
    })
    return () => subscription.unsubscribe()
    }, [watch])

    React.useEffect(() => {
        let maxLevelSet = "";
        let currentLevel = -1;
        for(let name of Object.keys(values)){
            if(values[name] && fieldsByLevel[name].level >= currentLevel){
               maxLevelSet = name;
               currentLevel = fieldsByLevel[name].level;
            }
        }
        setLevel(currentLevel + 1);
        if(values['profession']){
            axios({
                method: "GET",
                url: BASE_URL + `/motif/profession/${values['profession']}`,
                params: {                  
                    idCentre: app.idCentre,
                },
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                let motifs = response.data.data;
                setMotifList(motifs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                              
            })
            .catch((error) => {
             
            });
        }
        if(values['lieu']){
            axios({
                method: "GET",
                url: BASE_URL + "/users/",
                params: {
                    isPraticien: true,
                    idCentre: app.idCentre,
                    idSpeciality: values['profession'],
                    idLieu: values['lieu']
                },
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                let praticiens = response.data.data;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                setPraticienList(praticiens);                
            })
            .catch((error) => {
             
            });
        }
    return () => {}
    }, [values])

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
    
    const professionList = useSelector((state) => state.Professions.data);
    const lieuList = useSelector((state) => state.Lieux.data);
    const getRessources = async () => {
    
      if (!(professionList && professionList.data && professionList.data.length > 0)){
        dispatch(professions.loading());
        try{
            const data = await getAllProfessions()
            dispatch(professions.save(data));
        }catch(e){
            dispatch(professions.loadingError(e));
        }
      }

      if (!(lieuList && lieuList.data && lieuList.data.length > 0)){
        
        dispatch(lieux.loading());
        try{
            const data = await getAllLieux()
            dispatch(lieux.save(data));
        }catch(e){
            dispatch(lieux.loadingError(e));
        }
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
                            <BasicFormControl  label="Quel est la profession ?"  Input={SelectWithOption} props={{  options: (professionList && professionList.data || []).flatMap(profession.toListItem), value: values["profession"], ...register('profession',{ required: true }), placeholder: 'Profession' }} />
                        </Grid>: []
                        }
                        {
                            level  >= 1 ?
                            <Grid item xs={12}>
                                <BasicFormControl label="Quel est le motif de la consultation ?"  Input={SelectWithOption} props={{ value: values["motif"], options: (motifList || []).flatMap(motif.toListItem), ...register("motif"), placeholder: 'Motif' }} />
                            </Grid>
                            :[]
                        }
                        {
                            level  >= 2 ? <Grid item xs={12}>
                                <BasicFormControl label="Quel est le lieu de rendez vous ?"  Input={SelectWithOption} props={{  value: values["lieu"], options: (lieuList && lieuList.data || []).flatMap(lieu.toListItem), ...register("lieu"), placeholder: 'Lieu du rendez vous' }} />
                            </Grid>:[]
                        }
                        {
                            level  >= 3 ?
                            <Grid item xs={12}>
                                <BasicFormControl label="Avec quel praticien ?" Input={SelectWithOption} props={{ value: values["praticien"], options: (praticienList || []).flatMap(praticien.toListItem), ...register("praticien"), placeholder: 'Praticien' }} />
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