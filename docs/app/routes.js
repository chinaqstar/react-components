import Home from './components/pages/Home'

const routes = {
  path: '/',
  component: Home,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    {
      path: 'home',
      component: Home
    }
  ]
}

export default routes;
