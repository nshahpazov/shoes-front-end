/// <reference path="../../typing/react.d.ts" />
/// <reference path="../../typing/react-dom.d.ts" />
/// <reference path="../../typing/react-router.d.ts" />
import * as React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import * as ReactDOM from 'react-dom';
import ShoesApp from './components/ShoesApp';
import Basket from './components/basket/Basket';

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={ShoesApp} />
      <Route path="/basket" component={Basket}/>
    </Router>
  </div>,
  document.getElementById('main')
);