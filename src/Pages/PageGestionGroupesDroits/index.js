import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import GestionLayout from '../../Components/authers/GestionLayout/index.js'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent/index.js'
import { DATA_TABLE_GROUPE_COLONNE } from '../../Constants/dataFields.js'
import groups from "../../REDUX/groups/actions"
import { getAllGroup } from '../../services/groups/index.js'
// import { styles } from './style.js'

function PageGestionGroupesDroits({ data }) {
    const dispatch = useDispatch();
    
    const load = async ()=>{
      dispatch(groups.loading());
        try{
            const data = await getAllGroup();
            dispatch(groups.save(data));
        }catch(e){
            dispatch(groups.loadingError(e));
        }
    }
    useEffect(()=>{
      load();
    }, []);
    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des groupes Droits"}
            object={"groupe"}
            dataField={DATA_TABLE_GROUPE_COLONNE}
            dataInfo={data?.data}
        />
    )
}

const mapStateToProps = state => ({
    data: state.Groups.data,
    loading: state.Groups.loading,
    error: state.Groups.error
  });

export default connect(mapStateToProps)(PageGestionGroupesDroits)
