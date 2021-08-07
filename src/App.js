import FormComponent from "./Components/formcomponent";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import Preferences from './Pages/Preferences';
import Dashboard from './Pages/Dashboard';
import Login from './Components/Login/Login';

export default function App() {
  return (
    <div className="">
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <BrowserRouter>
      <Switch>
      <Route path="/register">
        <FormComponent />
      </Route>
      <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      </Switch>
      </BrowserRouter>
      
     
    
    </div>
  );
}
