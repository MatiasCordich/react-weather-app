import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{

/* COLORES */
  --black-s: #222222;
  --black-l: #191717;
  --black-m: #454545;
  --green: #03C988;
  --white: #fafafa;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html,body{
    width: 100%;
    height: 100%;
}

html{
    font-size: 62.5%;
}

body{
    font-size:1.8rem;
    background-color: var(--black-l);
    color: #fafafa;
}

ul{
    list-style: none;
}


a{
    text-decoration: none;
}

fieldset{
    border: none;
}

input{
    outline: none;
}

::-webkit-scrollbar{
    display: none;
}
`;
