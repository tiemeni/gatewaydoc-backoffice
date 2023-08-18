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

  const splitChaine= localStorage.getItem('defaultPraticien').split(",")
  console.log(splitChaine)

  const [checkedItems, setCheckedItems] = useState(localStorage.getItem('defaultPraticien')? splitChaine:[]);
  console.log(checkedItems)

  const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)


  useEffect(() => {
    dispatch(saveEventsPractionner(checkedItems))
  console.log(checkedItems)

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

        localStorage.setItem('defaultPraticien', firstChildId)

      }
    }
  }



  }, [checkedItems]);

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

    localStorage.setItem('defaultPraticien', newCheckedItems.toString())

  };

  const handleChildCheckboxChange = (event) => {

 
        async function fetchData() {

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
      console.log('voici newCheckedItems: '+ name.toString())

      console.log([newCheckedItems])


      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      const allChildrenChecked = data[parentName].every((child) =>
        newCheckedItems.includes(child._id)
      );

    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== name);
      alert('not checked'+ name)


      const parentName = Object.keys(data).find((key) =>
        data[key].some((item) => item._id === name)
      );
      newCheckedItems = newCheckedItems.filter((item) => item !== parentName);
    }

          // if (!newCheckedItems.includes(checkedItems)){
          // if(!newCheckedItems.some(element => element.includes(checkedItems))){
            // alert('found')
            setCheckedItems(newCheckedItems);
          // }
          console.log(newCheckedItems)

          localStorage.setItem('defaultPraticien', newCheckedItems)

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
                    checked={(localStorage.getItem('defaultPraticien').includes(child._id))}
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