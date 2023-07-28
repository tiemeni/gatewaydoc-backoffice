import {Blue, Grey } from '../../../../Constants/colors';
import { inputClasses } from '@mui/base/Input';



export function styleTab({ theme }) { return ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: 800,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
})
}
export function styleTabs(){
  return {
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  }
}
export function styleTextarea({ theme }) { 
    return `
    width: 100%;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? Grey[300] : Grey[900]};
    background: ${theme.palette.mode === 'dark' ? Grey[900] : Grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? Grey[800] : Grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : Grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? Grey[700] : Grey[400]};
    }

    &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? Blue[600] : Blue[100]};
    }
    `
}

export function styleLabel({ theme}){
  return `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;
  font-weight: 700;
  &.invalid {
    color: red;
  }
`
}
export function styleInput({ theme }){
  
  return `
    
    .${inputClasses.input} {
      width: 100%;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.palette.mode === 'dark' ? Grey[300] : Grey[900]};
      background-color: white;
      border: 1px solid ${theme.palette.mode === 'dark' ? Grey[800] : Grey[300]};
      border-radius: 8px;
      padding: 12px 12px;
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? '' : Grey[100]};
        border-color: ${theme.palette.mode === 'dark' ? Grey[700] : Grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? Blue[600] : Blue[100]};
      }
    }
  `
}
export function styleSelect({ theme }){
  
  return `
    
      width: 100%;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.palette.mode === 'dark' ? Grey[300] : Grey[900]};
      background-color: white;
  
  
      
    
  `
}
/*
        background: ${theme.palette.mode === 'dark' ? '' : Grey[100]};
        outline: 3px solid ${theme.palette.mode === 'dark' ? Blue[600] : Blue[100]};
{
        width: "100%",
        fontSize: "0.875rem",
        fontFamily: "IBM Plex Sans,sans-serif",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#1A2027",
        background: "#F3F6F9",
        border: "1px solid #CDD2D7",
        borderRadius: "8px",
        padding: "12px 12px"
      }
*/
export default { styleTextarea, styleInput, styleLabel, styleSelect, styleTab, styleTabs };