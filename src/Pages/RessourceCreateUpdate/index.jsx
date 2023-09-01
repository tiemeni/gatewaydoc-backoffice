import React, { useMemo } from "react";

import fieldsMap from "../../Constants/fields";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateLayout from "../../Components/authers/CreateLayout";
import modelSettings from "../../models/modelSettings";
import ressourcesMap from "../../models/ressourcesMap";



const RessourceCreateUpdate = () => {
  const dispatch = useDispatch();
  const { ressourceName, ressourceId } = useParams();

  const [redirect, setRedirect] = React.useState(false);

  const ressource = useMemo(()=>ressourcesMap[ressourceName],[ressourceName])

  const state = useSelector((state)=>state);

  React.useEffect(() => {
    modelSettings[ressource].related.loaders.flatMap((callback)=>callback(dispatch,state))
  }, []);

  
  const fieldsList = modelSettings[ressource].related.getRelatedValues([...modelSettings[ressource].related.selector(state)],fieldsMap[ressource].fields);
    const resolve = (ressourceId) => new Promise(async (callback, reject)=>{
    try{
      const { data } = await modelSettings[ressource].fetch(ressourceId);
      callback(data);
      
    }catch(e){
      reject({ message: "initialisation failled" })
    }
    
  })
  
  return (
    
    <CreateLayout       fields={fieldsList}
    title={ `Gestion des ${ressourceName}`}
    objectId={ressourceId||null}
    type={ressource}
    object={ressource}
    redirect={redirect}
    resolve={resolve}
    submit={!ressourceId?modelSettings[ressource].create :modelSettings[ressource].update}></CreateLayout>
  );
};

export default RessourceCreateUpdate;
