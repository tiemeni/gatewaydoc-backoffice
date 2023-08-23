import { Box, Grid, Button, Typography, Divider, Alert, Radio, Skeleton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { showDRDV } from "../../../REDUX/commons/actions";
import { updateRDV } from "../../../services/rdv";
import dayjs from "dayjs";
import React, { useEffect, useMemo } from "react";
import BasicFormControl from "../FichePriseRdvComponentWrapper/FormsComponents/BasicFormControl";
import CustomDateInput from "../FichePriseRdvComponentWrapper/FormsComponents/CustomDateInput";
import CustomTimeInput from "../FichePriseRdvComponentWrapper/FormsComponents/CustomTimeInput";
import StyledInput from "../FichePriseRdvComponentWrapper/FormsComponents/StyledInput";
import {DATE, NUMBER} from '../../../Constants/fieldTypes';
import PhoneInput from "react-phone-input-2";
import  { getPraticienById } from "../../../services/praticiens"
import generateTimeRange from "../../../helpers/generate";
import SelectWithOption from "../FichePriseRdvComponentWrapper/FormsComponents/SelectWithOption";
import { JOURS } from "../../../Constants/jours";
import { getAppointements } from "../../../services/appointments";
import { toast } from "react-toastify";
import InfiniteScroll from 'react-infinite-scroll-component';

import CircularIndeterminate from "../PriseRdvComponentWrapper/CircularIndeterminate";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import lieux from "../../../REDUX/lieux/actions";
import { getAllLieux } from "../../../services/lieux";
import lieu from "../../../Utils/transformers/lieu";

function Form(){
    const eventData = useSelector((state)=>state.Common.rdv);
    const [data, setData] = React.useState({});
    const [filter, setFilter] = React.useState({"idp": eventData.resourceId});
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [praticein, setPraticien] = React.useState({});
    const dispatch = useDispatch();
    
    const lieuList = useSelector((state) => state.Lieux.data);
    
    const patient = {
        ...eventData?.patient
    }
    const { register, handleSubmit, getValues, watch, setValue } = useForm();
    
    
    const onSubmit = (e)=>{

        let values = {

        }
        let item = results.find((result)=>result.displayedDate === data['disponibility'])
        if(item){
            values = {
                "startTime": item?.start,
                "endTime": dayjs(`${item?.date_long}`).add(+praticein?.timeSlot,'m').format('HH:mm'),
                "date_long": item?.date_long,
            }
        }

        updateRDV(eventData["_id"], JSON.stringify(values)).then(()=>{
            const event = new Event("ReloadEvent");
            window.dispatchEvent(event);
            dispatch(showDRDV(false));
            toast.success("Rendez deplacer avec success")
        }).catch(()=>{

        });
    }
    
    


    const close = ()=>{
        dispatch(showDRDV(false));
    }
    
    const fetchMoreData = ()=>{

    }  
    React.useEffect(()=>{
        getPraticienById(eventData.resourceId).then((rep)=>setPraticien(rep.data))
    },[eventData])
    
    
    React.useEffect(() => {
        
        const subscription = watch(async(values, { name, type }) =>{
                        
            let v = { ...values};
            setData(v);
            //setValue(name, values[name]);
        
        })
    return () => subscription.unsubscribe();
    }, [watch]);
    React.useEffect(()=>{
        if(filter["idp"] && !loading){

            setLoading(true);
            getAppointements(filter).then((response) => {
                let disponibilities = response.data;
                console.log(response)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                //setDisponibilityList(disponibilities);
                setResults([ ...disponibilities,  ]); 
                              
            })
            .catch((error) => {
                toast.error(JSON.stringify(error))
            }).finally(()=>{
                setLoading(false);
            });
            
        }
    },[filter,eventData]);
    const getRessources = async () => {
    
        
  
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
      },[])
      const submitSearch = ()=>{
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
    const slotRanges = useMemo(() => generateTimeRange(praticein.timeSlot), [data.timeSlot]);
//    const eventData = useSelector((state)=>state.)
    return <Box style={{ heigth: "100%", maxHeight: "100%" }}>
              <form style={{ backgroundColor: "darkgrey", height: "90vh",  maxHeight: "90vh", overflow: "scroll"}}  onSubmit={handleSubmit(onSubmit)}>
        
        <Grid container  style={{ padding: "12px" }}>
       
  
                  
                      
                 
                  <Grid item xs={12}>
                      <Grid container spacing={1} style={{
                          padding: 15 
                      }}>
                          <Grid item xs={6}>
  
                              <Typography variant="h4" component={"h2"}  gutterBottom>
                                  Avec {eventData['name']}
                              </Typography>
                          </Grid>
                            <Grid item xs={6}>
                                <Box>    
                                    <Typography variant="h5" component={"h3"}  gutterBottom>
                                        Motif du rendez vous  :  <Typography variant="subtitle1" component={"span"}>
                                                                {eventData['motif']}
                                                                </Typography>
                                    </Typography>
                                   
                                </Box>
                            </Grid>


    
                          <Grid item xs={3}>
                              <BasicFormControl  label='Date'  Input={CustomDateInput} props={{ name: 'date', disabled: true, minDate: dayjs() , value:  dayjs( getValues('date') ||eventData.date), ...register('date'), placeholder: 'date' }} />
                          </Grid>
                          <Grid item xs={3}>
                              <BasicFormControl  label='Heure Patient'  Input={CustomTimeInput} props={{ name: 'startTime', value: dayjs(`2022-04-17T${eventData.timeStart}`),views: ['hours','minutes'], ...register('startTime'), disabled: true, placeholder: 'StartTime' }} />
                          </Grid>
                          <Grid item xs={3}>
                              <BasicFormControl  label='Heure Reelle'  Input={CustomTimeInput} props={{ name: 'endTime', value: dayjs(`2022-04-17T${eventData.timeEnd}`), disabled: true, views: ['hours','minutes'], disable: true, placeholder: 'Nom' }} />
                          </Grid>
                          <Grid item xs={3}>
                              <BasicFormControl  label='Duree (en min.) '  Input={StyledInput} props={{ name: 'duration', value: eventData.duration, disabled: false , placeholder: 'Nom', style:  {backgroundColor: "white" }, ...register('duration') , type: NUMBER }} />
                          </Grid>
                          <Grid item xs={12}>
                              <Divider orientation="horizontal"/>
                          </Grid>
                          <Grid item xs={12}>
  
                              <Typography variant="h5"  gutterBottom>
                                  Patient: {patient['name']}  
                              </Typography>

                            
                          </Grid>
                          <Grid item xs={6}>
                              <BasicFormControl  label='Telephone portable'  Input={PhoneInput} props={{ value: patient.telephone, style: { "borderColor": "rgb(51,51,51)", "backgroundColor": "transparent"}, disabled: true, name: 'telephone' , placeholder: '', label: '' }} />
                          </Grid>
                          <Grid item xs={6}>
                              <BasicFormControl  label='Telephone fixe '  Input={PhoneInput} props={{ name: 'fixe', disabled: true , placeholder: '', label: '' }} />
                          </Grid>
                          <Grid item xs={6}>
                              <BasicFormControl  label='Email '  Input={StyledInput} props={{ name: 'email', value: patient.email, disabled: true , placeholder: 'email' }} />
                          </Grid>
                          <Grid item xs={6}>
                              <BasicFormControl  label='Date de naissance '  Input={CustomDateInput} props={{ name: 'birthdate', disabled: true, value: dayjs(patient.birthdate), type: DATE, placeholder: 'Birthdate' }} /> 
                          </Grid>

                          
                            <Grid item xs={12}>
    
                                <Typography variant="h5"  gutterBottom>
                                    Rechercher un autre rendez-vous disponible:
                                </Typography>

                                
                            </Grid>
                            <Grid item xs={3}>
                              <BasicFormControl  label='Date'  Input={CustomDateInput} props={{ name: 'start', disabled: false, minDate: dayjs() , value:  dayjs( getValues('start') ), ...register('start'), sx: { backgroundColor: "white"}, placeholder: 'start' }} />
                          </Grid>
                          <Grid item xs={3}>
                                <BasicFormControl  label='Jour'  Input={SelectWithOption} props={{ value: getValues("day"),...register("day"), options: JOURS, style: { backgroundColor: "white"}, placeholder: 'Jour' }} />
                            </Grid>
                          <Grid item xs={3}>
                                <BasicFormControl  label='Creneau horaire'  Input={SelectWithOption} props={{ value: getValues("slotRange"), ...register("slotRange"), options: slotRanges, style: { backgroundColor: "white"}, placeholder: 'Slot Range' }} />
                            </Grid>

                          <Grid item xs={3}>
                          <BasicFormControl label="Quel est le lieu de rendez vous ?"  Input={SelectWithOption} loading={!lieuList || lieuList.loading} props={{  value: data["lieu"], options: (lieuList && lieuList.data || []).flatMap(lieu.toListItem), ...register("lieu"), style: { backgroundColor: "white"}, placeholder: 'Lieu du rendez vous' }} />
                          </Grid>
  
                                <Grid item xs={12} style={{ textAlign: "center"}}>
                                    <Button onClick={submitSearch} variant="contained" type="button">Rechercher</Button>
                                 </Grid>
                                 {loading ? <Grid item xs={12} ><Skeleton variant="rounded" width={"100%"} height={"100px"} /></Grid> :<Grid item xs={12} style={{ padding: "5px", "borderRadius": "10px"  }}>
                                        
                                            {
                                            results.length !== 0?                                          <InfiniteScroll
                                            dataLength={results.length-1}
                                            next={fetchMoreData}           
                                            hasMore={false }
                                            
                                            loader={<CircularIndeterminate/>}
                                            >    
                                            <Grid container>
                                                    <Grid item xs={4}>
                                                    {
                                                        results.slice(0, Math.ceil(results.length/3) ).flatMap((item, index)=><Typography  
                                                        sx={{  }}
                                                        component="p" 
                                                        color={"black"}>
                                                        <Radio
                                                         sx={{ padding: "1px" }}
                                                        checked={data["disponibility"] === item.displayedDate}
                                                        {...register("disponibility")}
                                                        value={item.displayedDate}
                                                       
                                                        inputProps={{ 'aria-label': item.displayedDate }}
                                                        />    {item.displayedDate}
                                                        </Typography>)
                                                    }
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                    {
                                                        results.slice(Math.ceil(results.length/3), Math.ceil(results.length/3)*2 ).flatMap((item, index)=><Typography  
                                                        sx={{  }}
                                                        component="p" 
                                                        color={"black"}>
                                                            <Radio
                                                         sx={{ padding: "1px" }}
                                                        checked={data["disponibility"] === item.displayedDate}
                                                        {...register("disponibility")}
                                                        value={item.displayedDate}
                                                       
                                                        inputProps={{ 'aria-label': item.displayedDate }}
                                                        />{item.displayedDate}
                                                            </Typography>)
                                                    }
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                    {
                                                        results.slice(Math.ceil(results.length/3)*2, Math.ceil(results.length/3)*3 ).flatMap((item, index)=><Typography  
                                                        sx={{  }}
                                                        component="p" 
                                                        color={"black"}>
                                                            <Radio
                                                         sx={{ padding: "1px" }}
                                                        checked={data["disponibility"] === item.displayedDate}
                                                        {...register("disponibility")}
                                                        value={item.displayedDate}
                                                       
                                                        inputProps={{ 'aria-label': item.displayedDate }}
                                                        />{item.displayedDate}
                                                            </Typography>)
                                                    }
                                                    </Grid>
                                                    
                    
                                                    </Grid>        
                                            </InfiniteScroll> :<Alert severity="error">Pas de plages trouver</Alert>
                                            }          


                                        
                                 </Grid>}
                                <Grid item xs={4}>

                                </Grid>
                              <Grid item xs={2}>
                                  <Button variant="contained" disabled={!data['disponibility']} color="warning" type="submit"  disableElevation>
                                    Valider
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
    </Box>
}

export default Form;