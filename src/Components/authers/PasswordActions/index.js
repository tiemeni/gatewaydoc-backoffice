import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { showMEDP } from '../../../REDUX/commons/actions';

export default function PasswordActions({ row }){
  const dispatch = useDispatch();
  const edit = () => dispatch(showMEDP(true,row))
  const reset = ()=>{
    swal({
      title: "etes vous sur ?",
      text: "message envoie",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        
        swal("Ressource supprime avec success", {
          icon: "success",
        });
      } else {
       
      }
    });
  }  
    
    return <Stack spacing={2}>
      <Button variant="contained" onClick={edit} endIcon={<EditIcon />}>
        Modifier le mot de passe 
      </Button>
      <Button variant="contained" onClick={reset} endIcon={<SendIcon />}>
      Envoyer le lien de réinitialisation par mail
      </Button>
    </Stack>
}