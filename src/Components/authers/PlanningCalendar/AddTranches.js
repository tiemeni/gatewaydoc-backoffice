import { Input } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import BasicFormControl from "./FormsComponents/BasicFormControl";
import StyledInput from "./FormsComponents/StyledInput";
import {DATE, NUMBER} from '../../../Constants/fieldTypes';
import PhoneInput from "react-phone-input-2";

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
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import 'react-phone-input-2/lib/bootstrap.css'
import { getAllMotif, motifsByProfession } from "../../../services/motifs";
import CustomDateInput from "./FormsComponents/CustomDateInput";
import dayjs from "dayjs";
import CustomTimeInput from "./FormsComponents/CustomTimeInput";
import motif from "../../../Utils/transformers/motif";
import { Chip } from '@mui/material';
import { deleteRDV, updateRDV } from '../../../services/rdv';
import { showDRDV, showPFRDV } from "../../../REDUX/commons/actions";
import { toast } from 'react-toastify';
import { Editor } from 'react-draft-wysiwyg';



export default function AddTranches ({ praticien ={} })
{
    const [phone, setPhone] = React.useState('');
    const [data, setData] = React.useState({});
    const event = useSelector(state => state.Common.event);

    
    const classes = styles();
    const items = [{}];
    const { register, handleSubmit, getValues, watch } = useForm();

    const onSubmit = (e)=>{
        console.log(data, e)
        let values = {

        }
        if(e.date){
            values['startDate'] =  e.date.format('DD/MM/YYYY');
        }
        if(e.startTime){
            values['startTime'] =  e.date.format('HH:mm');
        }
    }
    
    const dispatch = useDispatch();
    const deleteEvent = ()=>{
        
    }
    const mouve = ()=>{
        dispatch(showPFRDV(false));
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
       const prof = await motifsByProfession(praticien.id)
    }
    useEffect(()=>{
        loadMotifsByProfession();
    },[event])

    React.useEffect(() => {
        
        const subscription = watch(async(values, { name, type }) =>{
                        
            let v = { ...values};
            setData(v);
            //setValue(name, values[name]);
        
        })
    return () => subscription.unsubscribe();
    }, [watch]);
   
    
    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        
      <Grid container  style={{ padding: "12px" }}>
     

                
                    
               
                <Grid item xs={12}>
                    <Grid container spacing={1} style={{
                        padding: 15 
                    }}>
                       

                        <Grid item xs={6}>
                            <BasicFormControl  label='Status'  Input={StyledInput} props={{ name: 'status', disabled: true, value: getValues('status') , placeholder: 'status' }} />
                            {/*<BasicFormControl  label='Status du DRV'  Input={SelectWithOption} props={{ name: 'name' , placeholder: 'Nom' }} />*/}
                        </Grid>
                        <Grid item xs={6}>
                            <BasicFormControl  label='Motif'  Input={StyledInput} props={{ name: 'motif', disabled: true, value: getValues('motif') , placeholder: 'status' }} />
                            {/*<BasicFormControl  label='Motif'  Input={SelectWithOption} props={{ name: 'motif', options: (motifsList && motifsList.data||[]).flatMap(motif.toListItem)  , placeholder: 'Nom' }} />*/}

                        </Grid>    
                        <Grid item xs={3}>
                            <BasicFormControl  label='Date'  Input={CustomDateInput} props={{ name: 'date', disabled: true, minDate: dayjs() , value:  dayjs( getValues('date') ), ...register('date'), placeholder: 'date' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Patient'  Input={CustomTimeInput} props={{ name: 'startTime', value: dayjs(),views: ['hours','minutes'], ...register('startTime'), disabled: true, placeholder: 'StartTime' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Heure Reelle'  Input={CustomTimeInput} props={{ name: 'endTime', value: dayjs(), disabled: true, views: ['hours','minutes'], disable: true, placeholder: 'Nom' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <BasicFormControl  label='Duree (en min.) '  Input={StyledInput} props={{ name: 'duration', value: 20, disabled: true , placeholder: 'Nom', ...register('duration') , type: NUMBER }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider orientation="horizontal"/>
                        </Grid>


                        
                        <Grid item xs={12}>
                            <BasicFormControl  label='Commentaire '  Input={StyledInput} props={{ name: 'commentaire', multiline: true , rows: 3, placeholder: 'commentaire' }} />
                        </Grid>

                            <Grid item xs={4}>                
                                <Button variant="contained"  color="info"  disableElevation>
                                    Memoriser et appliquer
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="inherit" type="submit"  disableElevation>
                                    RAZ
                                </Button>
                            </Grid>
                         
                            
                        </Grid>
                  
                    
                </Grid>
              
      </Grid>
      </form>    
    )
}