import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Layout from './components/Layout';
import pages from './pages';

function capturePages() {
  return (
    <Switch>
      {pages.map((page, index) => {
        return <Route key={"route_" + index} exact path={page.path} component={page.component} />
      })}
    </Switch>
  )
}

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

function App(props) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout >
          {capturePages()}
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
