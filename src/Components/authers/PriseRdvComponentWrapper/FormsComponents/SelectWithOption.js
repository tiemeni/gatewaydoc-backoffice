import { MenuItem, Select } from "@mui/material";
import StyledSelect from './StyledSelect'

function SelectWithOption({ options = [], ...props }) {
    
    return (
      <StyledSelect   {...props}>
        {
          options.map((option, index)=><MenuItem key={`${option.id}_${index}`} value={option.id}>{option.label}</MenuItem>)
        }
       
      </StyledSelect>
    );
  }

export default SelectWithOption;