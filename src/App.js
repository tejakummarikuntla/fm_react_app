import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Home from "./components/screens/Home";
import Episodes from "./components/screens/Episodes";
import Ep_4 from "./components/screens/Blog_4";
import Ep_5 from "./components/screens/Blog_5";
import Ep_6 from "./components/screens/Blog_6";
import Signin from "./components/screens/Signin";
import Contact from "./components/sections/Contact";
import { reducer, initialState } from "./reducer/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //if token has

    dispatch({ type: "USER", payload: user });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/episodes/all">
        <Episodes />
      </Route>
      <Route path="/episodes/ep_4">
        <Ep_4 />
      </Route>
      <Route path="/episodes/ep_5">
        <Ep_5 />
      </Route>
      <Route path="/episodes/ep_6">
        <Ep_6 />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route exact path="/episodes">
        <Redirect to="/episodes/all" />
      </Route>
      <Route exact path="/ep4">
        <Redirect to="/episodes/ep_4" />
      </Route>
      <Route exact path="/ep5">
        <Redirect to="/episodes/ep_5" />
      </Route>
      <Route exact path="/ep6">
        <Redirect to="/episodes/ep_6" />
      </Route>
    </Switch>
  );
};

//viewPort

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
