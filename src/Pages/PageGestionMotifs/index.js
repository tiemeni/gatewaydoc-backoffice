import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_MOTIF_COLONNE } from '../../Constants/dataFields'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux' 
import motifs from '../../REDUX/motifs/actions'
import { getAllMotif } from '../../services/motifs'

function GestionMotifs( { data, loading, error } ) {
  const dispatch = useDispatch();

  const getMotifs = async () => {
      
    if(!(data && data.length > 0)){

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
    getMotifs() ;
  }, [])

  return (<>
        <GestionLayout
        searchForm={<SearchPraticienFormComponent />}
        title={"Gestion des motifs"}
        object={"motif"}
        dataField={DATA_TABLE_MOTIF_COLONNE}
        // dataInfo={{ user1: ["Consultation", "Consultation", "15 minutes", "bleu", "reff_4554454", "yes"] }}
        dataInfo={data?.data}
      />
  </>

  )

}

const mapStateToProps = state => ({
  data: state.Motifs.data,
  loading: state.Motifs.loading,
  error: state.Motifs.error
});



export default connect(mapStateToProps)(GestionMotifs);