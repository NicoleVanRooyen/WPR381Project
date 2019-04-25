import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Output from './Output'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div>
     <form class = 'buttons'>
        <button><Link to="/">Enter a new Code</Link></button> 
        <button><Link to="/Output">View Output</Link></button>
     </form>
        <Route exact path="/" component={App} />
        <Route path="/Output" component={Output} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
