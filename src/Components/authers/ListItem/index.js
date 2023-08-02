import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { connect, useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { saveEventsPractionner } from "../../../REDUX/calendar/actions";
import { saveEvents } from "../../../REDUX/calendar/actions";
import { getEventsByPractionner } from "../../../services/calendars";



function NestedCheckboxes({ data, boxChange }) {
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);
  const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)


  useEffect(() => {

    dispatch(saveEventsPractionner(checkedItems))
    async function fetchData() {
      // setIsLoading(true);
      // const response = await getEventsByPractionner(idPracti);
      const finalId=  Object.values(checkedItems).join(",");
      console.log("voici final id"+checkedItems)
      const response = await getEventsByPractionner(checkedItems);

      if (response.success !== true) {
        return;
      }
      // setIsLoading(false);
      dispatch(saveEvents(response.data))
    }
    fetchData()


  }, [checkedItems]);

  const handleParentCheckboxChange = (event, parentName) => {
    const { checked } = event.target;
    let newCheckedItems = [...checkedItems];
        if(data){

            if (checked) {
            newCheckedItems = newCheckedItems.concat(data[parentName].map((item) => item._id));
            } else {
            newCheckedItems = newCheckedItems.filter((item) => !data[parentName].map((item) => item._id).includes(item));

            }
        }
    // if(checkedItems.length>=1 ){
      setCheckedItems(newCheckedItems);

    // }
//   dispatch(saveEventsPractionner(checkedItems))


  };

  const handleChildCheckboxChange = (event) => {

    // if( idPracti ){
        async function fetchData() {
            // setIsLoading(true);
            // const response = await getEventsByPractionner(idPracti);
            const finalId=  Object.values(checkedItems).join(",");
            console.log("voici final id"+checkedItems)
            const response = await getEventsByPractionner(checkedItems);
      
            if (response.success !== true) {
              return;
            }
            // setIsLoading(false);
            dispatch(saveEvents(response.data))
          }
          fetchData()
    // }


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
    //   if (allChildrenChecked) {
    //     newCheckedItems.push(parentName);
    //   }
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== name);

      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      newCheckedItems = newCheckedItems.filter((item) => item !== parentName);
    }


        // if(checkedItems.length>=1 ){
      setCheckedItems(newCheckedItems);

    // }
//   dispatch(saveEventsPractionner(checkedItems))

    // saveEventsPractionner(checkedItems)

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
              defaultChecked
              onChange={(e) => handleParentCheckboxChange(e, parentName)}
              name={parentName}
            />
          }
          label={parentName}
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
              label={`${child.name} ${child.surname}`}
              sx={{ fontSize: "14px" }} // ajout de la propriété sx pour la taille de police
            />
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