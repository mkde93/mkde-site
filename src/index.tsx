import React from 'react';
import ReactDOM from 'react-dom';
import history from './history'
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import './index.scss';
import App from './App';
import CV from './CV';
import Footer from './components/Footer';
import Header from './components/Header';
const stores = {

};
ReactDOM.render(
    <Router history={history}>
        <div id="contentwrap">
            <div id="footer-always-bottom">
                <Header />
                <div id="contentwrapper">
                    <Switch>
                        <Route exact={true} path="/" component={App} />
                        <Route exact={true} path="/profile" component={App} />
                        <Route exact={true} path="/cv" component={CV} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    </Router>,
    document.getElementById("root") as HTMLElement
);
