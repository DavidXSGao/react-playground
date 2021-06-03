import React, { useReducer } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import RouterSwitch from "./components/RouterSwitch";
import { BrowserRouter as Router } from "react-router-dom";

export const AppContext = React.createContext();

const initialState = {
  isSidebarDisplayed: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleNavbar":
      return { ...state, isSidebarDisplayed: !state.isSidebarDisplayed };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="App">
        <Router>
          <Sidebar />
          <div
            className="Main"
            style={{
              marginLeft: state.isSidebarDisplayed ? "250px" : "0px",
              paddingTop: "10px",
              transition: "350ms",
            }}
          >
            <RouterSwitch />
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
