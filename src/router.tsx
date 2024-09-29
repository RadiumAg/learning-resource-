import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <div>Hello World</div>,
  }],
}]);

export {
  router,
};
