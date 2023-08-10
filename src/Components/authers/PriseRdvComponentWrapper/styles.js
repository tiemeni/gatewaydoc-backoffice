import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    form: {
        display: 'flex',
        maxHeight: '66vh',
        overflow: 'scroll',
        marginBottom: '2px',
        height: '66vh'
    },
    search:{
        borderRadius: "30px",
        position: "relative",
        top: "35%",
        width: "100%"
    },
    stepper: {
        width: '100%',
        marginTop: '15px'
    }
})
export default styles;