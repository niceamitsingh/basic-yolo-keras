import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ProducerDashboard from './screens/producer.dashboard';

const routing = (
    <Router>
        <div>
            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/producer">producer</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/producer" component={ProducerDashboard} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
