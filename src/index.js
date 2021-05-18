import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #fff;
  --black: #000;
  --color-background: #182B24;

  --color-blue-light: #1CFFE5;
  --color-red-light: #FF2B44;

  --color-text: #222;
  --font-body: 'Oswald', sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  line-height: 1.15;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
p,
h1,
h2,
h3,
h4,
h5,
h6 ul,
span {
  margin: 0;
  padding: 0;
}

ul, ol, li {
  list-style: none;
}

body {
  height: 100vh;
  padding: 2rem;
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 1.6rem;
  font-weight: 400;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

.wrapper {
  width: 85%;
  max-width: 1250px;
  margin: 0 auto;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
