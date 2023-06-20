import React from 'react'
import { getUsers } from '../../services/users/index'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsers } from '../../REDUX/users/actions'
import GestionLayout from '../../Components/authers/GestionLayout/index.js'

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
    <GestionLayout />
  )
}