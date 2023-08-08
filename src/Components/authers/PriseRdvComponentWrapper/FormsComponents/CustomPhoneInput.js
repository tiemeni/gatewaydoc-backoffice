import PhoneInput from 'react-phone-input-2';
function CustomPhoneInput({ onChange= ()=>{},...props}){
    return <PhoneInput {...props} onChange={(v)=>onChange({ target: { name: props.name, value: props.value } })} />
}


export default CustomPhoneInput;