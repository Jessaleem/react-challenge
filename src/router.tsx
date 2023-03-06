import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import CharDetail from './components/CharDetail';
import Layout from './components/Layout';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/character/:id',
            element: <CharDetail />,
          },
          {
            path: '/episodes',
            element: <Episodes />,
          },
          {
            path: '/locations',
            element: <Locations />,
          },
        ],
      },
    ],
  },
]);

function Providers() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}
