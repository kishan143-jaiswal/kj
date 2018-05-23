import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Data from './components/Data';
import {Route,BrowserRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditProfile from './components/editProfile';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route exact path='/' component={Data} initial />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/profile' component={Profile} />
    <Route path='/editProfile' component={EditProfile} />
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
