import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GestionLayout from '../../Components/authers/GestionLayout';
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_SPECIALITE_COLONNE } from '../../Constants/dataFields';
import { saveSpecialities } from '../../REDUX/specialites/actions';
import { getSpecialities } from '../../services/specialities';

function PageGestionSpecialites() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState()
    const specialitiesList = useSelector((state) => state.Specialities.specialites)


    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await getSpecialities();

            if (response.success !== true) {
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            dispatch(saveSpecialities(response.data))
        }
        fetchData()
    }, [])

    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des spécialités"}
            object={"specialité"}
            dataField={DATA_TABLE_SPECIALITE_COLONNE}
            dataInfo={specialitiesList}
        />
    )
}

export default PageGestionSpecialites