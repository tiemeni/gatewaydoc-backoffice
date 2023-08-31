import React, { useEffect, useState } from 'react'
import styles from './style'
import UsersLayout from '../../../layout/usersLayout'
import SearchAccordion from '../SearchAccordion'
import { Link } from 'react-router-dom';
import { AddCircle } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import { DataTable } from '../DataTableComponent';
import { redirect } from "react-router-dom";

import FormGenerator from "../FormGenerator";
import { useNavigate, BrowserRouter } from 'react-router-dom';


const beForeSubmit = (data)=>{
    return data;
}
const submit = async()=>{

}
const empty = async()=>{

}
function CreateLayout({
    title,
    object,
    fields = {},
    beForeSubmit= beForeSubmit,
    objectId = null,
    submit = empty,
    defaultSettings = {redirect: true},
    type,
    resolve = empty 
}) {
    const [settings, setSettings] = useState(defaultSettings);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [initialising, setInitialising] = useState(true);
    const history = useNavigate();
    const onSubmit = async (data) => {
        setLoading(true);
        const payload = beForeSubmit(data);
        if (!objectId) {

          
          // { ...data, password: generatePassword() };
          const result = await submit(payload);
          if (result.success !== true){
            setLoading(false);
            return;
          }
          if(settings.redirect){
            redirect(`/content/${object}s`);
          }
          
        } else {
          //update user
          const result = await submit(payload, objectId);
          if (result.success !== true) { 
            setLoading(false);
            return;
          }
          if(settings.redirect){
            redirect(`/content/${object}s`);
          }
        }
        
    };
    useEffect(()=>{
      if(objectId){
        setInitialising(true);
        resolve(objectId).
        then((data)=>{
          setData(data)
          setInitialising(false);
        }).catch(()=>{

        });
      }
    },[objectId])
    const back = ()=>{
      history(-1)
      
    }
    return   <FormGenerator
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