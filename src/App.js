import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { Switch} from  "react-router-dom";
import Contact from './componentes/Contact';
import Home from './componentes/Home';
function App() {
  return (
   <>
   <h1>ava</h1>
   <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contactus" component={Contact} />
         
          </Switch>
      </Router>  
   </>
  );
}

export default App;
