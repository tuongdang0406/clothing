import "./App.css";
import { Route, Switch } from "react-router";

import HomePage from "./pages/homepage/homepage";

const HatPage = () => (
  <div>
    <h1>HAT</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hat" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
