/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout/Admin/Main';
import DashboardPage from 'containers/AdminPage/DashboardPage/Loadable';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

const LayoutMain = props => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

export default function App() {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="Trang chủ"
      >
        <meta name="description" content="Trang chủ" />
      </Helmet>
      <LayoutMain exact path="/" component={DashboardPage} />
    </React.Fragment>
  );
}
