import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BroswerRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import reducer from './reducers';
import EventsIndex from './component/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BroswerRouter>
        <Switch>
          <Route path="/events/new" componet={EventsNew} />
          <Route path="/events/:id" componet={EventsShow} />
          <Route exact path="/events" componet={EventsIndex} />
          <Route exact path="/" componet={EventsTndex} />
        </Switch>
      </BroswerRouter>
      <EventsIndex />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
serviceWorker.register();

