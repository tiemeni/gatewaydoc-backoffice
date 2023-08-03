import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import praticiens  from "../../../REDUX/praticiens/actions";
import GestionLayout from '../../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PRATICIEN_COLONNE } from '../../../Constants/dataFields';
import { getCivilities } from "../../../services/civilities";
import { getPraticiens } from "../../../services/praticiens";

function PageGestionPraticiens({ data, loading, error }) {

  const dispatch = useDispatch();
  const [ListPraticiens, setListPraticiens] = useState(data||[]);
  const getAllPraticiens = async ()=>{
    if(!(ListPraticiens && ListPraticiens.length > 0)){

      dispatch(praticiens.loading());
      try{
          const data = await getPraticiens()
          dispatch(praticiens.save(data));
      }catch(e){
          dispatch(praticiens.loadingError(e));
      }
    }
  }
  console.log(ListPraticiens)
  useEffect(() => {
    
    getAllPraticiens();
    let praticiens = data !== null?data : [];
    getCivilities().then((resp)=>{
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
        dataInfo={ListPraticiens}
      />
      {/* <pre className="container">{JSON.stringify(data)}</pre> */}
    </container>
  );
}

const mapStateToProps = (state) => ({
  data: state.Praticiens.data,
  loading: state.Praticiens.loading,
  error: state.Praticiens.error,
});
export default connect(mapStateToProps)(PageGestionPraticiens);