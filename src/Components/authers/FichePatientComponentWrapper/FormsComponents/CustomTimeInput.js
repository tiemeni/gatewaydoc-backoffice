import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function CustomTimeInput ({ onChange= ()=>{},...props}){
    return <TimePicker {...props} onChange={(v)=>onChange({ target: { name: props.name, value: props.value } })} />
}


export default CustomTimeInput;