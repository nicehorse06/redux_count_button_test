import React from 'react';
import ReactDOM from 'react-dom';

// import redux packages
import { Provider } from 'react-redux';

// import store bt export default createStore(Reducers);
import configureStore from './store/configureStore';

// import container
import Panel from './containers/Panel';

//事實上，整合了 react-redux 後，我們的 React App 就可以解決傳統跨 Component 之前傳遞 state 的問題和困難。只要透過 Provider 就可以讓每個 React App 中的 Component 取用 store 中的 state，非常方便（接下來我們也會更詳細說明 Container/Component、connect 的用法）。
ReactDOM.render(
  <Provider store={configureStore}>
      <Panel />
  </Provider>
, document.getElementById('app'));
