import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser ] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
           <Login></Login>
        </Route>
        <PrivateRoute path="/destination">
            <Destination></Destination>
        </PrivateRoute>
        <PrivateRoute path="/type/:type">
            <Destination></Destination>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
