import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Route>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/resume' component={Pdf} />
        </div>
    </Route>
    
    , document.getElementById('root'));

// tool berfungsi untuk mengarahkan tampilan index sih 'mungkin'
serviceWorker.unregister();
