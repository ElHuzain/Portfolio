import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* color: ${({theme}) => theme.colors.text}; */
}

::-webkit-scrollbar {
    background-color: transparent;
    width: 2px;
}
::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.primary};
}


#root {
    background-color: ${({theme}) => theme.colors.background};
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}

img {
    background-color: transparent;
}

a, a:hover, a:active, a:visited {
    color: unset;
    text-decoration: none;
    font-style: none;
    width: fit-content;
    height: fit-content;
}


`

export default GlobalStyles;