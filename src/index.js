import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,BrowserRouter,} from 'react-router-dom';

import App from './page/App/App';
import News from './page/News/news';
import Api from './Api.js';
import Sender from './page/Sender/sender.js';
import Manage from './page/Manage/manage.js';
import Login from './page/Login/login.js';
import Receiver from './page/Receiver/receiver.js';
import Register from './page/Register/register.js';


ReactDOM.render(
    (<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/news" component={News} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/receiver" component={Receiver} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sender" component={Sender} />
        <Route exact path="/manage" component={Manage} />
        <Route exact path="/register" component={Register} />
        
    </Switch>
    </BrowserRouter>)
    , document.getElementById('root'));

    

