/* React imports */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/* Routing / Redux / store imports */
import { BrowserRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import store  from './store';

/* CSS import */
import '../sass/style.scss';

/* Dashboard components import */
import App from './components/Dashboard/Dashboard';
import NotFound from './components/404/';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

render((<AppContainer>{router}</AppContainer>),document.getElementById("app"));

module.hot.accept();