import FormComponent from "./Components/formcomponent";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function App() {
  return (
    <div className="">
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <FormComponent />
    </div>
  );
}
