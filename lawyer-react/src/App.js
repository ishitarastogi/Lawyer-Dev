import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components//Navbar";
import Register from "./components/Register";
import About from "./components/About";
import GenerateHash from "./components/GenerateHash";

import Verify from "./components/Verify";
import Wallet from "./components/Wallet";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Register} />
        <Route path='/about' component={About} />
        <Route path='/GenerateHash' component={GenerateHash} />
        <Route path='/Verify' component={Verify} />
        <Route path='/wallet' component={Wallet} />

      </Switch>
    </Router>
  );
}

export default App;
