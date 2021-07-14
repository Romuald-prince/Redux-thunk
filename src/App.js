import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./component/CakeContainer";
import HooksCake from "./component/HooksCake";
import IceCreams from "./component/IceCreams";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCake />
        <CakeContainer />
        <IceCreams />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
