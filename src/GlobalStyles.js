import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{

    /* COLORES */

    /* MODO OSCURO */

  --black-s: #222222;
  --black-l: #191717;
  --black-m: #454545;
  --green: #03C988;
  --white: #fafafa;

  /* MODO CLARO */

  --white-s: #F6F4EB;
  --white-l: #F5F5F5;
  --white-m: #F5F4F4;
  --white-x: #C8C6C6;
  --white-r: #B4B4B3;
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
    background-color: ${({ theme }) => theme.colors.background};
    color: #fafafa;
    transition: .4s all;
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
