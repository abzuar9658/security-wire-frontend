import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Customer from "./Customer/Customer";
import CreateNewProgram from "./Customer/CreateNewProgram";
import Layout from "./Layout";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/customer/createdPrograms">
            <Customer />
          </Route>
          <Route exact path="/customer/createProgram">
            <CreateNewProgram />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
