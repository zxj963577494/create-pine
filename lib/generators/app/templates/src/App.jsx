<% if (isFull) { %>
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/utils/routes';

const App = () => <Switch>{renderRoutes(routes)}</Switch>;

export default hot(App);
<% } else { %>
import React from 'react';
import logo from './logo.svg';
import styles from './App.less';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
<% } %>
