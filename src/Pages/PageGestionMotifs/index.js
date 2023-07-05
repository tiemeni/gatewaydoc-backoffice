import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_MOTIF_COLONNE } from '../../Constants/dataFields'

function GestionMotifs() {
  return (
    <GestionLayout
      searchForm={<SearchPraticienFormComponent />}
      title={"Gestion des motifs"}
      object={"motif"}
      dataField={DATA_TABLE_MOTIF_COLONNE}
      dataInfo={{ user1: ["Consultation", "Consultation", "15 minutes", "bleu", "reff_4554454", "yes"] }}
    />
  )
}

export default GestionMotifs