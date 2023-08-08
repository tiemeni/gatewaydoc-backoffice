import { Provider } from "react-redux";
import Routeur from "./GlobalRouter";
import store from "./REDUX/setup/store";
import { ThemeProvider } from '@material-ui/core/styles';
import THEME from "./Constants/theme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routeur />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
