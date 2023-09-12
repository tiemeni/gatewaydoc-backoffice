import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { connect, useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { saveEventsPractionner } from "../../../REDUX/calendar/actions";
import { saveEvents } from "../../../REDUX/calendar/actions";
import { getEventsByPractionner } from "../../../services/calendars";
import { Divider } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Colors } from "../../../Constants/colors"
import Typography from "@mui/material/Typography";
import Popover from '@mui/material/Popover';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Settings } from '@mui/icons-material';
import MenuActions from "./MenuActions";
import { saveEventsPractionnerStart } from "../../../REDUX/calendar/actions";

function NestedCheckboxes({ data, boxChange }) {
  const dispatch = useDispatch();
  
  const defaultPracti = 1

  
  const idc= localStorage.getItem('idc')
  const splitChaine= localStorage.getItem('defaultPraticien'+idc)?.split(",") ?? ''

  const [checkedItems, setCheckedItems] = useState(localStorage.getItem('defaultPraticien'+idc)? splitChaine:[]);

  if (checkedItems.length === 0 &&  data ) {

    const firstParentName = Object.keys(data)[0]; // Récupérer le nom du premier parent
    
    console.log(firstParentName)


    if (data[firstParentName]) {
      const firstChildId = data[firstParentName][0]?._id;

      setCheckedItems([firstChildId]);

      localStorage.setItem('defaultPraticien'+idc, [firstChildId] )

    }
  }


  const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)
  const [openmenu, setOpenmenu] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const loadingFilter = useSelector((state) => state.Calendar.loadingFilter)



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ()=>{
    setOpenmenu("");    
  }

  useEffect(() => {
    dispatch(saveEventsPractionner(checkedItems))

    if (typeof defaultPracti !== "undefined"){

    async function fetchData() {

      dispatch(saveEventsPractionnerStart())
      const response = await getEventsByPractionner(checkedItems);

      if (response.success !== true) {
        return;
      }
      // setIsLoading(false);
      dispatch(saveEvents(response.data))
    }

    if (checkedItems.length === 0 &&  data ) {

      const firstParentName = Object.keys(data)[0]; // Récupérer le nom du premier parent
      
      console.log(firstParentName)


      if (data[firstParentName]) {
        const firstChildId = data[firstParentName][0]?._id;

        setCheckedItems([firstChildId]);

        localStorage.setItem('defaultPraticien'+idc, [firstChildId] )

      }
    }

      fetchData()
    
  }
  }, [checkedItems]);
  
  const waitReloadEvent = ()=>{
    setCheckedItems([...checkedItems]);
  }
  useEffect(()=>{
    window.addEventListener('ReloadEvent',waitReloadEvent)
    return ()=>{
      window.removeEventListener('ReloadEvent',waitReloadEvent)
    }
  },[])

  const handleParentCheckboxChange = (event, parentName) => {
    const { checked } = event.target;
    let newCheckedItems = [...checkedItems];
        if(data){

            if (checked) {
              console.log(data, parentName)
            newCheckedItems = data[parentName].map((item) => item._id);
            console.log(newCheckedItems)
            } else {
              console.log("---------------------------")
              let datatest = []
              datatest = newCheckedItems.filter((item) => !data[parentName].map((item) => item._id).includes(item));
              newCheckedItems=datatest

            }
        }

    setCheckedItems(newCheckedItems);
    console.log(newCheckedItems)

    localStorage.setItem('defaultPraticien'+idc, newCheckedItems.toString())

  };


const handleselectOnly = (id) =>{
  dispatch(saveEventsPractionnerStart())

  setCheckedItems([id]);
  localStorage.setItem('defaultPraticien'+idc, [id])


}
const handleChildCheckboxChange = (event) => {

 
  async function fetchData() {

    //mettre le loader a true
    dispatch(saveEventsPractionnerStart())
      const response = await getEventsByPractionner(checkedItems);

      if (response.success !== true) {
        return;
      }
      dispatch(saveEvents(response.data))
    }
    fetchData()

    const { name, checked } = event.target; 

    let newCheckedItems = [...checkedItems];

    if (checked) {
      newCheckedItems.push(name.replace(',',''));

      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      const allChildrenChecked = data[parentName].every((child) =>
        newCheckedItems.includes(child._id)
      );

    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== name);
      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      newCheckedItems = newCheckedItems.filter((item) => item !== parentName);
}

    setCheckedItems(newCheckedItems);

    localStorage.setItem('defaultPraticien'+idc, newCheckedItems)

};


const renderItems = () => {
  return Object.entries(data)?.map(([parentName, items]) => (
    <Box key={parentName} sx={{ ml: 2 }}>
      <Box style={{
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <FormControlLabel
          style={{ height: "20px", fontWeight: "bold", minHeight: "20px" }}
          control={
            <Checkbox
              checked={
                checkedItems && items.every((item) => checkedItems.includes(item._id))
              }
              defaultChecked
              onChange={(e) => handleParentCheckboxChange(e, parentName)}
              name={parentName}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: '#40a9ff', color: '#40a9ff'} }}
            />
          }
          label={parentName}
          // ajout de la propriété sx pour la taille de police
        />
        <AddOutlinedIcon style={{ height: "20px", width: "20px", mb: 2, color: Colors.primary, cursor: "pointer" }} />
      </Box>
      <Divider style={{ backgroundColor: Colors.primary }} />
      {items.map((child) => (
        <Box key={child._id} sx={{ ml: 2, mt: "3px", height: 'auto' }}>
          <Box style={{
            display: "flex",
            flexDirection: 'row',
            // gap: 0
            alignItems: "lft",
          }}>
            <FormControlLabel
              style={{ height: "20px", minHeight: "20px" }}
              control={
                <Checkbox
                  checked={(localStorage.getItem('defaultPraticien'+idc)?.includes(child._id))}
                  onChange={handleChildCheckboxChange}
                  name={child._id}
                  disabled = { loadingFilter }
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: '#40a9ff' }}
                />
              }
              // label={`${child.name} ${child.surname}`}
              sx={{ fontSize: "14px", flex: '6' }} // ajout de la propriété sx pour la taille de police
            />
            <span style={{ cursor: 'pointer' }} onClick={()=>handleselectOnly(child._id)} >{`${child.name} ${child.surname}`}</span>
            <AddOutlinedIcon style={{ height: "17px", width: "17px", cursor: "pointer", color: Colors.primary }} />
            <IconButton onClick={(e)=>{setOpenmenu(child._id);handleClick(e)}} aria-describedby={child._id} aria-label="delete" size="small">
                  <Settings style={{ fontSize: "14px"}} />
              </IconButton>  
              <Popover
                        id={child._id}
                        open={openmenu == child._id}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                  >
                    <MenuActions praticien={child._id}></MenuActions>
              </Popover>
          </Box>
        </Box>
      ))}
    </Box>
  ));
};


if(data.length!==0){

  return (
      <FormGroup>
        {renderItems()}
      </FormGroup>
    );
}else return (
  <div>

  </div>
)

}

export default NestedCheckboxes;