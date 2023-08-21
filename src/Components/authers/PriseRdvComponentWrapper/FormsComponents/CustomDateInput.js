import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function CustomDateInput ({ onChange= ()=>{},...props}){
    return <DatePicker {...props} onChange={(v)=>onChange({ target: { name: props.name, value: v } })} />
}


export default CustomDateInput;