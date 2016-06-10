import Master from './components/pages/Master';
import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button';

const routes = {
  path: '/',
  component: Master,
  // indexRoute: {
  //   component: Home
  // },
  childRoutes: [
    {
      path: 'home',
      component: Home
    },
    {
      path: 'button',
      component: ButtonPage
    }
  ]
}

export default routes;
