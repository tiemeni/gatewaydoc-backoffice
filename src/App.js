import { Provider } from "react-redux";
import Routeur from "./GlobalRouter";
import store from "./REDUX/setup/store";

function App() {

  return (
    <Provider store={store}>
        <Routeur />
    </Provider>
  );
}

export default App;
