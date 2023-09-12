export function toListItem (patient){
 return { value: patient._id , label: `${patient.name} ${patient.surname}` }
} 


export default  {
    toListItem
}  