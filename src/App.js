import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { Switch} from  "react-router-dom";
import Contact from './componentes/Contact';
import { Home} from './componentes/Home';
import { Header } from './componentes/Header';
import {Gallery} from './componentes/Gallery';
import {About} from './componentes/About';
import { Carousel } from './componentes/Carousel';

function App() {
  return (
   <>
   
   <Router>
        <Switch>
          <Route exact path="/" component={Header}/>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/home" component={Home} />    
        <Route path="/about" component={About} />    

        <Route path="/contactus" component={Contact} />    
        <Route path="/gallery" component={Gallery} />    
          </Switch>
      </Router>  
   </>
  );
}

export default App;
