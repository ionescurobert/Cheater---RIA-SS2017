import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App'
import Support from './Support'
import CreateSnippet from './CreateSnippet'
import ViewSnippet from './ViewSnippets'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/support' component={Support} />
            <Route path='/createsnippet' component={CreateSnippet} />
            <Route path='/viewsnippets' component={ViewSnippet} />
        </div>
    </BrowserRouter>,

    document.getElementById('root'));

registerServiceWorker();
