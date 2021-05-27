import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  textarea,
  button,
  figure {
    margin: 0;
    padding: 0;
  }

  fieldset,
  img {
    border: 0 none;
  }

  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  input,
  select,
  textarea,
  button {
    font-size: 100%;
    vertical-align: middle;
  }

  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -webkit-text-size-adjust: none;
  }

  input[type='text'],
  input[type='password'],
  input[type='submit'],
  input[type='search'] {
    -webkit-appearance: none;
    border-radius: 0;
  }

  input:checked[type='checkbox'] {
    background-color: #f0f2f5;
    -webkit-appearance: checkbox;
  }

  button,
  input[type='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='file'] {
    -webkit-appearance: button;
    border-radius: 0;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  body {
    background: #f0f2f5;
  }

  body,
  th,
  td,
  input,
  select,
  textarea,
  button {
    font-size: 14px;
    line-height: 1.5;
    font-family: 'Nanum Gothic', 'Roboto Mono', sans-serif;
    color: #555;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: #ffffff !important;
    color: #fff !important;
    box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #555 !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:active,
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  button,
  button:focus,
  button:hover,
  button:active,
  a,
  a:focus,
  a:hover,
  a:active,
  input:focus,
  textarea:focus {
    outline: 0 none;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }
`;

export default GlobalStyle;
