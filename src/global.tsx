// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #e3d9d9;
    background-color: #171817;
  }

  input, textarea {
    font-family: "Poppins";
  }

  .containerHome {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
  }

  button, .checkmark {
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
