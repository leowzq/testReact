import {render, ReactDOM} from 'react-dom';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Match,
  withRouter,
  IndexRoute,
  Link,
} from 'react-router-dom';
import PgIndex from './component/PgIndex';
import PgName from './component/PgName';
import PgNameIndex from './component/PgNameIndex';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Store from './reducers';

let store = createStore(Store);
// store.subscribe(() => {
//   console.log("AA", store.getState())
// })
render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={withRouter(PgIndex)} />
          <Route exact path={'/:name'} component={withRouter(PgNameIndex)} />
        </Switch>
      </BrowserRouter>
  </Provider>
  ),
  document.getElementById('react')
)
