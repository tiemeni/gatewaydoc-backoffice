import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE, NUMBER} from '../../../Constants/fieldTypes';
import SelectWithOption from "./FormsComponents/SelectWithOption";
import SearchIcon from '@mui/icons-material/Search';
import { Alert, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
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
import { saveData } from "../../../REDUX/prgv/actions";
import Skeleton from '@mui/material/Skeleton';

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
const MAX = 1440 * 2;
const generateTimeRange = (timeSlot =40 )=>{
    let ranges = [];
    let currentTime = 0;
    let num_page = MAX / timeSlot;
    let i = 0;
    let startTime = dayjs().minute(0).hour(0);
    let endTime = dayjs().minute(0).hour(0);
    endTime = endTime.add(timeSlot,"minute");
    for(let i =0; i < num_page; i ++){
//        a.add(timeSlot,"minute")
        ranges.push({
            value: `${startTime.format("HH:mm")}-${endTime.format("HH:mm")}`,
            label: `De ${startTime.format("HH:mm")} a ${endTime.format("HH:mm")}`,
        })
        i ++;
        startTime = endTime;
        endTime = endTime.add(timeSlot,"minute");
    }
    return ranges;
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
function StepOne( { next = ()=>{}, save =()=>{}, visible= ()=>{},    }){
    
    const data = useSelector((state)=>state.Prdv.steps[0]);
    const { results, praticienList, praticienListLoading, motifList, motifListLoading, disponibilityListLoading  } = useSelector((state)=>state.Prdv);
    const [phone, setPhone] = React.useState('');
  

    const [filter, setFilter] = React.useState({});

    const [level, setLevel] = React.useState(0);
   


    const classes = styles();
    const items = [{}];
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const { register, handleSubmit, watch, control, formState, getValues, setValue  } = useForm({
        defaultValues: {
          ...data
        },
      });
    
    useEffect(()=>{
        if(level == 6){
            visible({
                next: true,
                prev: false,
                submit: false
               })
        }else{
            visible({
                next: false,
                prev: false,
                submit: false
               })
        }

    },[level]);
    

    React.useEffect(() => {
        
        const subscription = watch(async(values, { name, type }) =>{
                        
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

            
            
            
            let collect = {};
            let datas = {  ...data, ...v };
            
//            setValues(v);
            if(values['lieu']  && name == "lieu"){
                try{
                    dispatch(saveData('praticienListLoading',true));
                    const response = await axios({
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
                    });
                    let praticiens = response.data.data;                                                                                   
     //               setPraticienList(praticiens);
                      
                    dispatch(saveData('praticienList',praticiens));
                    dispatch(saveData('praticienListLoading',false));
                }catch(e){
                    dispatch(saveData('praticienListLoading',false));
                    dispatch(saveData('error',e));
                }

                  
            }
            if(values['profession'] && name === "profession" ){
                try{
                    dispatch(saveData('motifListLoading',true));
                    const response = await  axios({
                        method: "GET",
                        url: BASE_URL + `/motif/profession/${values['profession']}`,
                        params: {                  
                            idCentre: app.idCentre,
                        },
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    });
                    let motifs = response.data.data;
                    dispatch(saveData('motifList',motifs));
                    dispatch(saveData('motifListLoading',false));
                    
                }catch(e){
                    dispatch(saveData('error',e));
                    dispatch(saveData('motifListLoading',false));
                }

                
//                setMotifList(motifs);
                //datas['motifList'] = motifs;  
    
            }

            if(values["praticien"] && name === "praticien" ){
                
                
                
                collect['idp'] = values["praticien"];
                    
                const p = (praticienList).filter((praticien)=>praticien._id === values["praticien"])[0];
                if(p)
                v["timeSlot"] = p.timeSlot;
                //v["timeSlot"] = p.timeSlot;    
                    
               
                setFilter(collect);
            }
            datas =v;     
            save(datas);
            //setValue(name, values[name]);
        
    })
    return () => subscription.unsubscribe();
    }, [watch]);


    React.useEffect(() => {
        let maxLevelSet = "";
        let currentLevel = -1;
        for(let name of Object.keys(data)){

            if(data[name] && (name in fieldsByLevel)  && fieldsByLevel[name].level >= currentLevel){
               maxLevelSet = name;
               currentLevel = fieldsByLevel[name].level;
            }
        }
        setLevel(currentLevel + 1);
        
        

    return () => {}
    }, [data])
    const slotRanges = useMemo(() => generateTimeRange(data.timeSlot), [data.timeSlot]);
    React.useEffect(()=>{
        if(filter["idp"]){
            dispatch(saveData('disponibilityListLoading',true));
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                //setDisponibilityList(disponibilities);
                save({ ...data,  }); 
                dispatch(saveData('results', disponibilities));
                dispatch(saveData('disponibilityListLoading',false));               
            })
            .catch((error) => {
                dispatch(saveData('disponibilityListLoading',false));
                dispatch(saveData('error',error));
            });
            
        }
    },[filter]);
    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }
    const fetchMoreData = ()=>{

    }
    const onSubmit = (e)=>{
        //save({ ...data, results: []});
        setValue("disponibility",null);
        let collect = {};
        if(data["startDate"]){
            
            collect['startDate'] = data["startDate"].format('YYYY-MM-DD')
        }
        if(data["day"]){
            
            collect['day'] = data["day"];
        }
        if(data["slotRange"]){
            
            collect['slotRange'] = data["slotRange"];
        }
        setFilter({...filter, ...collect});
        //console.log(filter)
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
            const data = await getAllProfessions();
            dispatch(professions.save(data));
        }catch(e){
            dispatch(professions.loadingError(e));
        }
      }

      if (!(lieuList && lieuList.data && lieuList.data.length > 0)){
        
        dispatch(lieux.loading());
        try{
            const data = await getAllLieux();
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
                            level  >= 0 ? <>
                        {
                            (level  >= 0 && !(professionList && professionList.loading) && (professionList && professionList.data.length === 0)) ? 
                                
                                <p className={classes.alert}><Alert severity="error">Pas de profession trouver</Alert> </p>
                            : <Grid item xs={12}>
                                
                                <BasicFormControl  label="Quel est la profession ?" loading={!professionList || professionList.loading}  Input={SelectWithOption} props={{  options: (professionList && professionList.data || []).flatMap(profession.toListItem), value: data["profession"], ...register('profession',{ required: true }), placeholder: 'Profession' }} />
                        </Grid>
                        }
                                                    
                    
                    </>: []
                        }
                        {
                            level  >= 1 || motifListLoading ?
                            <>
                                {
                                    (level  >= 1 && !motifListLoading && motifList.length === 0) ? 
                                        
                                        <p className={classes.alert}><Alert severity="error">Pas de motif trouver</Alert> </p>
                                    : <Grid item xs={12}>
                                        
                                    <BasicFormControl label="Quel est le motif de la consultation ?" loading={motifListLoading}  Input={SelectWithOption} props={{ value: data["motif"], options: (motifList || []).flatMap(motif.toListItem), ...register("motif"), placeholder: 'Motif' }} />
                                </Grid>
                                }
                                                            
                            
                            </>

                            :[]
                        }
                        {
                            level  >= 2 || (lieuList && lieuList.loading) ? 
                            
                            <>
                            {
                                (level  >= 2 && !(lieuList && lieuList.loading) && (lieuList && lieuList.data.length === 0)) ? 
                                    
                                    <p className={classes.alert}><Alert severity="error">Pas de profession trouver</Alert> </p>
                                : <Grid item xs={12}>
                                    
                                    <BasicFormControl label="Quel est le lieu de rendez vous ?"  Input={SelectWithOption} loading={!lieuList || lieuList.loading} props={{  value: data["lieu"], options: (lieuList && lieuList.data || []).flatMap(lieu.toListItem), ...register("lieu"), placeholder: 'Lieu du rendez vous' }} />
                            </Grid>
                            }
                                                        
                        
                        </>:[]
                        }
                        {
                            level  >= 3 ?
                            <>
                            {
                                (level  >= 2 && !(praticienListLoading) && ( praticienList.length === 0)) ? 
                                    
                                    <p className={classes.alert}><Alert severity="error">Pas de praticiens trouver</Alert> </p>
                                : <Grid item xs={12}>
                                    
                                    <BasicFormControl label="Avec quel praticien ?" Input={SelectWithOption} loading={praticienListLoading} props={{ value: data["praticien"], options: (praticienList || []).flatMap(praticien.toListItem), ...register("praticien"), placeholder: 'Praticien' }} />
                            </Grid>
                            }
                                                        
                        
                        </>

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
                                <BasicFormControl  label='Creneau horaire'  Input={SelectWithOption} props={{ value: getValues("slotRange"), ...register("slotRange"), options: slotRanges, placeholder: 'Slot Range' }} />
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
                {
                            level  >= 4 || disponibilityListLoading ?
                            <>
                                {
                                    disponibilityListLoading ? <Grid item xs={6} ><Skeleton variant="rounded" width={"100%"} height={"100%"} /></Grid> :     
                                    
                                    <Grid item xs={6} style={{ padding: "5px", "borderRadius": "10px", backgroundColor: "#cfeffd" }}>
                                        {
                                           results.length !== 0?                                          <InfiniteScroll
                                           dataLength={results.length-1}
                                           next={fetchMoreData}           
                                           hasMore={false}
                                           loader={<CircularIndeterminate/>}
                                           >    
                                               <List sx={{ width: '100%', backgroundColor: "#cfeffd", borderRadius: "5px", maxHeight: "54vh", marginTop: "4vh" }}>    
                                                   {
                                                       results.flatMap((item, index)=><ListItem style={{ "cursor": "pointer" }} onClick={()=>{ setValue("disponibility", item) }} key={index}>
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
                                           </InfiniteScroll> :<Alert severity="error">Pas de plages trouver</Alert>
                                        }          

                                 </Grid>
                                }
                            </>
                       :[]
                    }    
            </Grid>
       </form>    
    )
}

export default StepOne;