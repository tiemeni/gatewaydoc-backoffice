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


function NestedCheckboxes({ data, boxChange }) {
  const dispatch = useDispatch();
  
  // const defaultPracti = useSelector((state) => state.Praticiens.praticiens[0]?._id)
  const defaultPracti = 1

  // const [checkedItems, setCheckedItems] = useState( defaultPracti ?? []);
  const [checkedItems, setCheckedItems] = useState(localStorage.getItem('defaultPraticien')? localStorage.getItem('defaultPraticien'):[]);

  const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)


  useEffect(() => {
    console.log(checkedItems)
    dispatch(saveEventsPractionner(checkedItems))
    if (typeof defaultPracti !== "undefined"){

    async function fetchData() {

      const response = await getEventsByPractionner(checkedItems);

      if (response.success !== true) {
        return;
      }
      // setIsLoading(false);
      dispatch(saveEvents(response.data))
    }

      fetchData()

    if (checkedItems.length === 0 &&  data ) {
      // Si aucun élément n'est cochée et que 'data' est défini
      const firstParentName = Object.keys(data)[0]; // Récupérer le nom du premier parent

      if (data[firstParentName] && data[firstParentName].length > 0) {
        const firstChildId = data[firstParentName][0]?._id;
        setCheckedItems(firstChildId.toString());

        localStorage.setItem('defaultPraticien', firstChildId.toString())

      }
    }
  }



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

    setCheckedItems(newCheckedItems.toString());

    localStorage.setItem('defaultPraticien', newCheckedItems.toString())

//   dispatch(saveEventsPractionner(checkedItems))


  };

  const handleChildCheckboxChange = (event) => {

 
        async function fetchData() {

            // const finalId=  Object.values(checkedItems).join(",");
            // console.log("voici final id"+checkedItems)
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

          localStorage.setItem('defaultPraticien', newCheckedItems.toString())

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
                name={parentName}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            }
            label={parentName}
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
                label={`${child.name} ${child.surname}`}
                sx={{ fontSize: "14px" }} // ajout de la propriété sx pour la taille de police
              />
              <AddOutlinedIcon style={{ height: "17px", width: "17px", cursor: "pointer", color: Colors.primary }} />
            </Box>
          </Box>
        ))}
      </Box>
    ));
  };


  if(data.length!==0 && typeof defaultPracti !== "undefined"){

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