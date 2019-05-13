<% if (isFull) { %>
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';

import zhCN from 'antd/lib/locale-provider/zh_CN';

import { history, store } from '@/utils/store';

import App from './App'; // eslint-disable-line

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
<% } else { %>
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.less';

ReactDOM.render(<App />, document.getElementById('root'));
<% } %>
