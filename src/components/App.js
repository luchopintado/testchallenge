import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import DataShow from './pages/DataShow';
import RequestList from './pages/RequestList';
import history from '../history';
import Header from './shared/Header';


function App() {
  return (
    <div className="container">
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={RequestList} />
            <Route path="/request" exact component={RequestList} />
            <Route path="/data/show" exact component={DataShow} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
