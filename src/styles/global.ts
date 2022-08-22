import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--gray-4);
    color: var(--gray-0);
    -webkit-font-smoothing: antialiased;
    
    overflow-x: hidden;
  }

  body, input, button, textarea, select, option, a {
    font-family: 'Inter';
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--gray-0);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
    border: 2px solid var(--color-background);
    background: rgb(0,0,0, 0.5);
  }
`;
