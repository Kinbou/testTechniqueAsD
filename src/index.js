import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/styles/index.scss';
import App from 'src/components/App';
import reportWebVitals from './reportWebVitals';
import store from 'src/store';
// import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
