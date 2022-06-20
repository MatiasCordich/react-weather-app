import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

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
    color: #fafafa;
}

ul{
    list-style: none;
}


a{
    text-decoration: none;
}
`