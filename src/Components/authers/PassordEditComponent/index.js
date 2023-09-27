import FormGenerator from "../FormGenerator";
import * as fieldTypes from "../../../Constants/fieldTypes";

export default function PassordEditComponent(){
    const patientFields = [ {
        id: 1,
        label: "Password",
        name: "password",
        type: fieldTypes.PASSWORD,
        required: true,
        placeholder: "password"
    },{
        id: 2,
        label: "Confirm password Password",
        name: "password_confirmation",
        type: fieldTypes.PASSWORD,
        required: true,
        placeholder: "password"
    }];
    const onSubmit = ()=>{

    }
    return <FormGenerator hideTitle={true}   fields={patientFields}
    title={""}
    
    
    onSubmit={onSubmit}></FormGenerator>
}