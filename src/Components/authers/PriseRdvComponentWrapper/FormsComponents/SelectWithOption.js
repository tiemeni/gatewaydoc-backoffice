import { MenuItem, Select } from "@mui/material";
import StyledSelect from './StyledSelect'

function SelectWithOption({ options = [], ...props }) {

    return (
      <Select   {...props} value={props.value} onChange={(e,r)=>props.onChange(e,r)} >
        {
          options.map((option, index)=><MenuItem key={`${option.value}_${index}`} value={option.value}>{option.label}</MenuItem>)
        }
       
      </Select>
    );
  }

export default SelectWithOption;