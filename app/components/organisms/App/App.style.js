import styled, { css, createGlobalStyle } from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.LIGHT_GREAY};
    height: 100vh;
    min-height: 100%;
    min-width: 100%;
`
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 0.5rem;
        }
    } 

    @media screen and (min-width: 1281px)  and (max-width: 1440px){
        html { 
            font-size: 0.85rem;
        }
    }

    @media screen and (min-width: 1025px)  and (max-width: 1280px){
        html { 
            font-size: 0.7rem;
        }
    }
`;

