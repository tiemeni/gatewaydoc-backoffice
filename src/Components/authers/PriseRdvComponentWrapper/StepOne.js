import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE, NUMBER} from '../../../Constants/fieldTypes';
import SelectWithOption from "./FormsComponents/SelectWithOption";
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
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
import dayjs from 'dayjs';
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

import CustomDateInput from "./FormsComponents/CustomDateInput";


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
    },
    "startDate": {
        level: 4
    },
    "disponibility": {
        level: 5
    },
    "submitied": {
        level: 5
    }
}
const CRENEAUX = [{   
    value: "00:00-01:00",
    label: "00:00-01:00",        
    
},{
    value: "01:00-02:00",
    label: "01:00-02:00",
},{
    value: "02:00-03:00",
    label: "02:00-03:00",
},{
    value: "03:00-04:00",
    label: "03:00-04:00",
},{
    value: "04:00-05:00",
    label: "04:00-05:00",
},{
    value: "05:00-06:00",
    label: "05:00-06:00",
},{
    value: "06:00-07:00",
    label: "06:00-07:00",
},{
    value: "07:00-08:00",
    label: "07:00-08:00",
},{
    value: "08:00-09:00",
    label: "08:00-09:00",
},{
    value: "09:00-10:00",
    label: "09:00-10:00",
},{
    value: "11:00-12:00",
    label: "11:00-12:00",
},{
    value: "12:00-13:00",
    label: "12:00-13:00",
},{
    value: "14:00-15:00",
    label: "14:00-15:00",
},{
    value: "15:00-16:00",
    label: "15:00-16:00",
},{
    value: "16:00-17:00",
    label: "16:00-17:00",
},{
    value: "17:00-18:00",
    label: "17:00-18:00",
},{
    value: "18:00-19:00",
    label: "18:00-19:00",
},{
    value: "19:00-20:00",
    label: "19:00-20:00",
},{
    value: "20:00-21:00",
    label: "20:00-21:00",
}]

const JOURS = [
    {
        value: 1,
        label: "Lundi",        
    },
    {
        value: 2,
        label: "Mardi",        
    },
    {
        value: 3,
        label: "Mercredi",        
    },
    {
        value: 4,
        label: "Jeudi",        
    },
    {
        value: 5,
        label: "Vendredi",        
    },
    {
        value: 6,
        label: "Samedi",        
    },
    {
        value: 7,
        label: "Dimanche",        
    }

]

const PERIODES = [
    {
        value: 1,
        label: "Jour",        
    },
    {
        value: 7,
        label: "Semaine",        
    },
    {
        value: 31,
        label: "Mois",        
    },
    {
        value: 365,
        label: "Annee",        
    },

]
function StepOne( { next = ()=>{}, visible= ()=>{} }){
    const [phone, setPhone] = React.useState('');
    const [values, setValues] = React.useState({});
    const [filter, setFilter] = React.useState({});

    const [level, setLevel] = React.useState(0);
   
    const [praticienList, setPraticienList] = React.useState([]);
    const [disponibilityList, setDisponibilityList] = React.useState([]);
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
          lieu: null,
          interval: 1,
          periode: 0,
          day: 1,
          startDate: dayjs()
        },
      });


    useEffect(()=>{
        if(level == 6){
            visible({
                next: true,
                prev: false
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
            if(name in fieldsByLevel){

                for(let field in fieldsByLevel ){
                    if(fieldsByLevel[name].level < fieldsByLevel[field].level){
                        v[field] = null;                    
                    }
                }
            }
            if(['interval','periode'].includes(name) && v['periode'] && v['interval']){
                v['startDate'] = dayjs().add( +v['periode'] * v['interval'],'day')
                setValue("startDate", v['startDate'])
               
            }

            setValues(v)
            //setValue(name, values[name]);
        
    })
    return () => subscription.unsubscribe();
    }, [watch])


    React.useEffect(() => {
        let maxLevelSet = "";
        let currentLevel = -1;
        for(let name of Object.keys(values)){

            if(values[name] && (name in fieldsByLevel)  && fieldsByLevel[name].level >= currentLevel){
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
        let collect = {};
        if(values["praticien"]){
            collect['idp'] = values["praticien"]
                
            if(values["startDate"]){
                
                collect['startDate'] = values["startDate"].format('YYYY-MM-DD')
            }
            if(values["day"]){
                
                collect['day'] = values["day"];
            }
            if(values["slotRange"]){
                
                collect['slotRange'] = values["slotRange"]
            }
            setFilter(collect);
        }
    return () => {}
    }, [values])

    React.useEffect(()=>{
        if(filter["idp"]){
            axios({
                method: "GET",
                url: BASE_URL + "/appointments/rechercher_dispo/",
                params: {
                 
                    idCentre: app.idCentre,
                    ...filter,
                 
                },
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                let disponibilities = response.data.data;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                setDisponibilityList(disponibilities);                
            })
            .catch((error) => {
             
            });
            
        }
    },[filter]);
    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }
    const fetchMoreData = ()=>{

    }
    const onSubmit = (e)=>{
        setDisponibilityList([]);
        setValue("disponibility",null);
        let collect = {};
        if(values["startDate"]){
            
            collect['startDate'] = values["startDate"].format('YYYY-MM-DD')
        }
        if(values["day"]){
            
            collect['day'] = values["day"];
        }
        if(values["slotRange"]){
            
            collect['slotRange'] = values["slotRange"];
        }
        setFilter({...filter, ...collect});
      //setValues({ ...values, "submitted": true })
      //next();
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
     

                
                    
               
                <Grid item xs={6} style={{ padding: "5px"}}>
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
                                
                                <BasicFormControl  label='Date de debut'  Input={CustomDateInput} props={{ value: getValues("startDate") ,...register("startDate"), minDate: dayjs() ,  placeholder: 'Date debut' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl  label='Jour'  Input={SelectWithOption} props={{ value: getValues("day"),...register("day"), options: JOURS, placeholder: 'Jour' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl  label='Creneau horaire'  Input={SelectWithOption} props={{ value: getValues("slotRange"), ...register("slotRange"), options: CRENEAUX, placeholder: 'Slot Range' }} />
                            </Grid>    
                            <Grid item xs={4}>
                                <BasicFormControl label='Periode'  Input={StyledInput} props={{ value: getValues('periode'), min: 0, type: NUMBER, ...register("periode"), placeholder: 'Periode' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <BasicFormControl label='Interval de temps'  Input={SelectWithOption} props={{ value: getValues('interval'), ...register("interval"), options: PERIODES, placeholder: 'Interval' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <Button className={classes.search} variant="contained"  color="primary" size="medium" type="submit"  startIcon={<SearchIcon />}>
                                        Rechercher
                                </Button>
                            </Grid>
                        </Grid>: []
                    }
                        
                    
                    
                </Grid>
                <Grid item xs={6} style={{ padding: "5px", "borderRadius": "10px", backgroundColor: "#cfeffd" }}>
                    {
                            level  >= 4 ?
                        <InfiniteScroll
                        dataLength={disponibilityList.length-1}
                        next={fetchMoreData}           
                        hasMore={false}
                        loader={<CircularIndeterminate/>}
                        >    
                            <List sx={{ width: '100%', backgroundColor: "#cfeffd", borderRadius: "5px", maxHeight: "54vh", marginTop: "4vh" }}>    
                                {
                                    disponibilityList.flatMap((item, index)=><ListItem style={{ "cursor": "pointer" }} onClick={()=>{ setValue("disponibility", item) }} key={index}>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={<Typography  
                                            sx={{ display: 'inline' }}
                                            component="span" 
                                            color={"#a7c0ec"}>
                                                {item.displayedDate}
                                                </Typography> } secondary={item.pname} />
                                </ListItem>)
                                }

                            </List>
                        </InfiniteScroll>:[]
                    }    
                </Grid>
      </Grid>
      </form>    
    )
}

export default StepOne;