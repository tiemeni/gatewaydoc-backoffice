import React from "react";
import { getAllPraticiens } from "../../../services/praticiens";
import { getCivilities } from "../../../services/civilities";
import { useDispatch, useSelector } from "react-redux";
import { fireSavePraticien } from "../../../REDUX/praticiens/actions";
import GestionLayout from "../../../Components/authers/GestionLayout/index.js";
import { SearchPraticienFormComponent } from "../../../Components/authers/SearchPraticienFormComponent";
import { DATA_TABLE_PRATICIEN_COLONNE } from "../../../Constants/dataFields";

export default function PageGestionPraticiens() {
  const [isLoading, setIsLoading] = React.useState(true);
  var practitionersList = useSelector((state) => state.Practitioner.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getAllPraticiens();
      console.log(response);
      if (response.success === true) {
          let praticiens = response.data;
          praticiens.forEach((prati) => {
            prati["label_civility"] = prati.civility.label;
          });
          practitionersList = praticiens;
          dispatch(fireSavePraticien(response.data));
      }
       setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <GestionLayout
      searchForm={<SearchPraticienFormComponent />}
      title={"Gestion des praticiens"}
      object={"practitioner"}
      dataField={DATA_TABLE_PRATICIEN_COLONNE}
      dataInfo={practitionersList}
    />
  );
}
