import ReactDom from 'react-dom';
import { Route, Router } from 'react-router';
import { Home } from './components/pages/Home'

const routes = {
  path: '/',
  component: Home,
  children: [

  ]
}

export default routes;
