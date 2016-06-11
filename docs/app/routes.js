import Master from './components/pages/Master';
import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button';
import AppBarPage from './components/pages/AppBar';

const routes = {
  path: '/',
  component: Master,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    {
      path: 'home',
      component: Home
    },
    {
      path: 'button',
      component: ButtonPage
    },
    {
      path: 'appbar',
      component: AppBarPage
    }
  ]
}

export default routes;
