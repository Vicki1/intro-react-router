import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Store from './components/Store/Store';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hammers from './components/Hammers';
import Drills from './components/Drills';
import Nails from './components/Nails';
import StoreLanding from './components/StoreLanding'
ReactDOM.render(
    
    <Router>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/about' component={About}/>
        <Route  path='/store' render={()=>(
            <Store>
                
                <Route path="/store/nails" components={Nails}/>
                <Route path="/store/drills" components={Drills}/>
                <Route path="/store/hammers" components={Hammers}/>
                
            </Store>
        )}/>
      </Switch>
    </Router>,

 

 document.getElementById('root'));
registerServiceWorker();
