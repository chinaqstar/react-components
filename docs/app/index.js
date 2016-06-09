import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

const history = useRouterHistory(createHashHistory)();

ReactDOM.render(
  <Router history={history} children={routes}></Router>,
  document.getElementById('app')
);
