import { Provider } from "react-redux";
import Routeur from "./GlobalRouter";
import store from "./REDUX/setup/store";
import { ThemeProvider } from '@material-ui/core/styles';
import THEME from "./Constants/theme";

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Routeur />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
