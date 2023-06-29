import React from 'react'
import { getUsers } from '../../services/users/index'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsers } from '../../REDUX/users/actions'
import GestionLayout from '../../Components/authers/GestionLayout/index.js'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_SPECIALITE_COLONNE, DATA_TABLE_USERS_COLONNE } from '../../Constants/dataFields'

export default function Users() {
  const [isLoading, setIsLoading] = React.useState(true);
  const usersList = useSelector((state) => state.Users.users)
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getUsers();

      if (response.status !== true) {
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      dispatch(saveUsers(response.data))
    }
    fetchData()
  }, [])

  return (
    <GestionLayout
      searchForm={<SearchPraticienFormComponent />}
      title={"Gestion des utilisateurs"}
      object={"utilisateur"}
      dataField={DATA_TABLE_USERS_COLONNE}
      dataInfo={{ user1: ["M", "Tiemeni hapi", "Christian", "17-01-2001", "658686162", "tiemanirocket@gmail.com", "N5s4d5s4d5son", "04/03/2023", "photo.jpg", "yes", "id_droit"] }}
    />
  )
}