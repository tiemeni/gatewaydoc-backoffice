import React, { useEffect, useState } from 'react'
import styles from './style'
import UsersLayout from '../../../layout/usersLayout'
import SearchAccordion from '../SearchAccordion'
import { Link } from 'react-router-dom';
import { AddCircle, Flag } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import { DataTable } from '../DataTableComponent';
import { redirect } from "react-router-dom";

import FormGenerator from "../FormGenerator";
import { useNavigate, BrowserRouter } from 'react-router-dom';
import { Alert } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert';
import { toast, } from 'react-toastify';
import ressources from "../../../models/ressources"

const submit = async()=>{

}
const empty = async()=>{

}
function CreateLayout({
    title,
    object,
    fields = [],
    objectId = null,
    submit = empty,
    defaultSettings = {redirect: true},
    type,
    resolve = empty 
}) {
    const [settings, setSettings] = useState(defaultSettings);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [submitionError, setSubmitionError] = useState(null);
    const [initialising, setInitialising] = useState(false);
    const history = useNavigate();
    const onSubmit = async (data) => {
        setLoading(true);
        const payload = data;
        if (!objectId) {

          
          // { ...data, password: generatePassword() };
          const result = await submit(payload);
          setLoading(false);
          if (result.success !== true){
            toast.error(result.message);  
            return;
          }
          const ressource = ressources.find((ressource)=>ressource.model == object)
          if(settings.redirect){
            
            toast.success(`Creation de la ressource ${object} reussie`);

            history(`/content/ressources/${ressource.route}`);
            
          }else{
            swal("Creation reussi!", "You clicked the button!", "success");
            
          }
          return true;
          
        } else {
          //update user
          const result = await submit(payload, objectId);
          setLoading(false);
          
          if (result.success !== true) { 
            toast.error(result.message)
            return;
          }
          
          toast.success("Mise a jour reussie");
          history(`/content/ressources/${ressource.route}`);
        }
        
    };
    useEffect(()=>{
      setData(null);
      if(objectId){
        setInitialising(true);
        resolve(objectId).
        then((data)=>{
         
          setData(data)
          setInitialising(false);
        }).catch((error)=>{
          setError(error);
        });
      }
    },[objectId])
    const back = ()=>{
      history(-1)
      
    }
    const reload = ()=>{
      history(window.location.pathname)
    }
    if(error){
      return <Alert severity="error"  action={
        <IconButton onClick={reload} >
          <RefreshIcon></RefreshIcon>
        </IconButton>
      } variant='standard' title={error.message} /> 
    }
    return   <FormGenerator
                data={data}
                loading={loading}
                initialising={initialising}
                fields={fields}
                title={title || `Gestion des ${object}(s) `}
                dataId={objectId}
                type={type}
                back={back}
                onSubmit={onSubmit}
            />
}
/** {isLoading &&
                    <Box sx={styles.loaderContainer}>
                        <CircularProgress />
                    </Box>} */
export default CreateLayout;