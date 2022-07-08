import logo from "./logo.svg";
import "./App.css";
import { FirstComponent } from "./FirstComponent";
import { SecondComponent } from "./SecondComponent";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(({ component, path }) => (
          <Route component={component} path={path} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
