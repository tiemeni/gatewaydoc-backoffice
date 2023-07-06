import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_MOTIF_COLONNE } from '../../Constants/dataFields'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux' 
import { getAllMotif } from '../../REDUX/motifs/actions'

function GestionMotifs( { data, loading, error } ) {
  const dispatch = useDispatch();
  const [motifs, setMotifs] = useState([])
  
  useEffect(()=>{
    dispatch( getAllMotif() );
    alert(data)
  }, [])
    return (<>
            {JSON.stringify(data)}
          <GestionLayout
          searchForm={<SearchPraticienFormComponent />}
          title={"Gestion des motifs"}
          object={"motif"}
          dataField={DATA_TABLE_MOTIF_COLONNE}
          // dataInfo={{ user1: ["Consultation", "Consultation", "15 minutes", "bleu", "reff_4554454", "yes"] }}
          dataInfo={data.data}
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