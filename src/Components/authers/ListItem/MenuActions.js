import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setShowPraticienPlanning } from '../../../REDUX/commons/actions';


export default function MenuActions({ praticien }){
    const empty = ()=>{};
    const dispatch = useDispatch();

    const actions = [
        {
            name: "Fiche praticien"
        },
        {
            name: "Lieux"
        },
        {
            name: "Consignes"
        },
        {
            name: "Planning",
            click: ()=>{
                dispatch(setShowPraticienPlanning(praticien));            
            }
        },
        {
            name: "Motif de RDV"
        },
        {
            name: "Fermeture temporaire"
        },
        {
            name: "Aces inter-professionel"
        },
        {
            name: "Remplacants"
        },
        {
            name: "Absences"
        },
        {
            name: "Codes priotaires"
        }
    ]    
    return     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="action sur le patient">
      <List>
        {
            actions.flatMap((action, index)=>        <ListItem key={index} disablePadding>
            <ListItemButton  onClick={action.click||empty} sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <ListItemText   primary={ <Typography fontSize={12} fontWeight={700} variant='subtitle1' >{action.name}</Typography> } />
            </ListItemButton>
          </ListItem>)
        }


      </List>
    </nav>
  </Box>
}