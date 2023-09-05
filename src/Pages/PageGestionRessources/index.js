import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GestionLayout from '../../Components/authers/GestionLayout';
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PATIENT_COLONNE, DATA_TABLE_PRATICIEN_COLONNE } from '../../Constants/dataFields';
import modelSettings from '../../models/modelSettings';
import ressourcesMap from '../../models/ressourcesMap';
import { savePatients } from '../../REDUX/patients/actions';
import { getPatients } from '../../services/patients';
import data_tables from '../../Constants/dataFields';

function PageGestionRessources() {
    const [isLoading, setIsLoading] = useState(false);
    const { ressourceName  } = useParams();
    const state = useSelector((state)=>state);
    const ressource = useMemo(()=>ressourcesMap[ressourceName],[ressourceName])

    
    const dispatch = useDispatch();

    React.useEffect(() => {
      modelSettings[ressource].related.loaders.flatMap((callback)=>callback(dispatch,state))
    }, [ressourceName]);
    const datas = modelSettings[ressource].gestion.selector(state)
    async function fetchData() {
      setIsLoading(true);
      const response = await modelSettings[ressource].loadAll();

      if (response.success === true) {
        modelSettings[ressource].saveAll(dispatch,response.data);
      }

      setIsLoading(false);
      
    }
    React.useEffect(() => {
    
      fetchData();
    }, [ressourceName])

    const onRowsPerChange = (a)=>{
      console.log(a)
    }
    const onPageChange = (a)=>{
      console.log(a)
    }
    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={`Gestion des ${ressourceName}`}
            object={ressource}
            onPageChange={onPageChange} 
            onRowsPerChange={onRowsPerChange}
            loading={isLoading}
            dataField={data_tables[ressource]}
            dataInfo={datas}
        />
    )
}

export default PageGestionRessources