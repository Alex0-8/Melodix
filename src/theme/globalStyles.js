import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        font-family: ${props => props.theme.fonts.fontFamily};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    p{
        font-size: 17px;
    }

    main{
        display: flex;
        justify-content: space-between;
    }

    /*Modo oscuro*/
    @media (prefers-color-scheme: dark){
        body{
            background-color: #000;
            color: #fff;
        }

        .songs{
            background-color: #121212;
            box-shadow: none;
        }

        .songs:hover{
            background-color: #2b2727;
        }
    }
`

export default GlobalStyle;