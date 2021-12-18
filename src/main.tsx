import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

        html {
          font-family: Nunito, sans-serif;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
