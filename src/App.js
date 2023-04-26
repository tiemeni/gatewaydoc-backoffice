import { Provider } from "react-redux";
import Routeur from "./Components/GlobalRouter";
import store from "./REDUX/setup/store";


function App() {

  return (
    <Provider store={store}>
      <div>
        <Routeur />
      </div>
    </Provider>
  );
}

export default App;
