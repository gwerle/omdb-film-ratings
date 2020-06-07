import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  }

  a {
    text-decoration: none
  }

  button {
    cursor: pointer;
  }
`;
