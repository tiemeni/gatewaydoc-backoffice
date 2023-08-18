import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import GestionLayout from '../../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PRATICIEN_COLONNE } from '../../../Constants/dataFields';
import { getCivilities } from "../../../services/civilities";
import { getPraticiens } from "../../../services/praticiens";
import praticiens from "../../../REDUX/praticiens/actions";

function PageGestionPraticiens({ data, loading, error }) {
  console.log(data)
  const dispatch = useDispatch();
  const [ListPraticiens, setListPraticiens] = useState(data || []);
  const getAllPraticiens = async () => {
    if (!(data && data.length > 0)) {

      dispatch(praticiens.loading());
      try {
        const data = await getPraticiens()
        dispatch(praticiens.save(data));
      } catch (e) {
        dispatch(praticiens.loadingError(e));
      }
    }
  }

  useEffect(() => {

    getAllPraticiens();
    let praticiens = data !== null ? data : [];
    getCivilities().then((resp) => {
      praticiens.forEach((prati) => {
        let civ = resp.data.filter((item) => item._id === prati.civility);
        prati["label_civility"] = civ.length > 0 ? civ[0].label : "";
      });
      setListPraticiens(praticiens);
    });
  }, []);


  return (
    <container maxWidth="md">
      <GestionLayout
        searchForm={<SearchPraticienFormComponent />}
        title={"Gestion des praticiens"}
        object={"praticien"}
        dataField={DATA_TABLE_PRATICIEN_COLONNE}
        dataInfo={data}
      />
    </container>
  );
}

const mapStateToProps = (state) => ({
  data: state.Praticiens.praticiens,
  loading: state.Praticiens.loading,
  error: state.Praticiens.error,
});
export default connect(mapStateToProps)(PageGestionPraticiens);