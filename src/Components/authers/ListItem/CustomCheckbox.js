import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { connect, useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { saveEventsPractionner } from "../../../REDUX/calendar/actions";

import Typography from "@mui/material/Typography";
import Popover from '@mui/material/Popover';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function NestedCheckboxes({data }) {
  const dispatch = useDispatch();
  
  const [checkedItems, setCheckedItems] = useState([]);
  const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)
  const [openmenu, setOpenmenu] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ()=>{
    setOpenmenu("");    
  }
  useEffect(() => {

    dispatch(saveEventsPractionner(checkedItems))



  }, [checkedItems]);

 
  const handleParentCheckboxChange = (event, parentName) => {
    const { checked } = event.target;
    let newCheckedItems = [...checkedItems];

    if (checked) {
      newCheckedItems = newCheckedItems.concat(data[parentName].map((item) => item._id));
    } else {
      newCheckedItems = newCheckedItems.filter((item) => !data[parentName].map((item) => item._id).includes(item));

    }

    setCheckedItems(newCheckedItems);


  };

  const handleChildCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let newCheckedItems = [...checkedItems];

    if (checked) {
      newCheckedItems.push(name);

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

  };

  
  const renderItems = () => {
    return Object.entries(data).map(([parentName, items]) => (
      <Box key={parentName} sx={{ ml: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={
                items.every((item) => checkedItems.includes(item._id))
              }
              onChange={(e) => handleParentCheckboxChange(e, parentName)}
              name={parentName}
            />
          }
          label={<Typography variant="h4" component={"ul"}>{parentName}</Typography>}
          sx={{ fontSize: "14px" }} // ajout de la propriété sx pour la taille de police
        />
        {items.map((child) => (
          <Box key={child._id} sx={{ ml: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.includes(child._id)}
                  onChange={handleChildCheckboxChange}
                  name={child._id}
                />
              }
              label={<Typography component={"li"}  noWrap={false} >{`${child.name} ${child.surname}`} </Typography>}
              sx={{ fontSize: "5px", textOverflow: "ellipsis"}} // ajout de la propriété sx pour la taille de police
            />

          </Box>
        ))}
      </Box>
    ));
  };

  return (
    <FormGroup>
      {renderItems()}
    </FormGroup>
  );
}

export default NestedCheckboxes;