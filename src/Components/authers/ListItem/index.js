import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { saveEventsPractionner, saveEvents } from "../../../REDUX/calendar/actions";
import { getEventsByPractionner } from "../../../services/calendars";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Colors } from "../../../Constants/colors";
import { Divider, Typography } from "@mui/material";


function NestedCheckboxes({ data, boxChange }) {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    dispatch(saveEventsPractionner(checkedItems))
    async function fetchData() {
      console.log("voici final id" + checkedItems)
      const response = await getEventsByPractionner(checkedItems);

      if (response.success !== true) {
        return;
      }
      dispatch(saveEvents(response.data))
    }
    fetchData()
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
    if (data) {
      if (checked) {
        newCheckedItems = newCheckedItems.concat(data[parentName].map((item) => item._id));
      } else {
        newCheckedItems = newCheckedItems.filter((item) => !data[parentName].map((item) => item._id).includes(item));
      }
    }
    setCheckedItems(newCheckedItems);
  };

  const handleChildCheckboxChange = (event) => {
    async function fetchData() {
      const finalId = Object.values(checkedItems).join(",");
      console.log("voici final id" + checkedItems)
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
      newCheckedItems.push(name);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== name);

      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      newCheckedItems = newCheckedItems.filter((item) => item !== parentName);
    }
    setCheckedItems(newCheckedItems);
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
                  items.every((item) => checkedItems.includes(item._id))
                }
                defaultChecked
                onChange={(e) => handleParentCheckboxChange(e, parentName)}
                name={<Typography variant="h5" noWrap title={`${parentName}`}>{`${parentName}`}</Typography>}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            }
            label={<Typography variant="h5" noWrap title={`${parentName}`}>{`${parentName}`}</Typography>}
            sx={{}} // ajout de la propriété sx pour la taille de police
          />
          <AddOutlinedIcon style={{ height: "20px", width: "20px", mb: 2, color: Colors.primary, cursor: "pointer" }} />
        </Box>
        <Divider style={{ backgroundColor: Colors.primary }} />
        {items.map((child) => (
          <Box key={child._id} sx={{ ml: 2, mt: "3px" }}>
            <Box style={{
              display: "flex",
              flexDirection: 'row',
              alignItems: "center",
            }}>
              <FormControlLabel
                style={{ height: "20px", minHeight: "20px" }}
                control={
                  <Checkbox
                    checked={checkedItems.includes(child._id)}
                    onChange={handleChildCheckboxChange}
                    name={child._id}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                  />
                }
                label={<Typography noWrap title={`${child.name} ${child.surname}`}>{`${child.name} ${child.surname}`}</Typography>}
                sx={{ fontSize: "14px" }} // ajout de la propriété sx pour la taille de police
              />
              <AddOutlinedIcon style={{ height: "17px", width: "17px", cursor: "pointer", color: Colors.primary }} />
            </Box>
          </Box>
        ))}
      </Box>
    ));
  };

  if (data?.length !== 0) {
    return (
      <FormGroup>
        {renderItems()}
      </FormGroup>
    );
  } else return (
    <div>

    </div>
  )

}

export default NestedCheckboxes;