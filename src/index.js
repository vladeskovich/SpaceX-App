import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './root/App/App';
import 'styles/index.scss';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(() => render());
}

render();
