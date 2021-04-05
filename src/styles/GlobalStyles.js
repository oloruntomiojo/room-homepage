import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Spartan', sans-serif;
        font-size: 12px;
        line-height: 1.65;
        letter-spacing: 0px;
    }

    p {
        color: ${props => props.theme.colors.darkGrey}
    }

    h1 {
        font-size: clamp(1.75rem, 1.6052rem + 0.8276vw, 2.35rem);
        line-height: 1.1;
        font-weight: 600;
        margin: .7em 0;
    }

    h3 {
        font-size: .75rem;
        letter-spacing: 5px;
        text-transform: uppercase;
        margin-bottom: 1em;
    }

    button {
        background-color: transparent;
        font-family: inherit;
        font-size: inherit;
        border: 0;
        display: block;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        display: block;
    }


`;