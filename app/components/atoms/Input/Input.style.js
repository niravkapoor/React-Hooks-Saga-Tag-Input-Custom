import styled, { css } from 'styled-components';

export default css`

`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    >input {
        border: 0;
        box-shadow: none;
        outline: none;
        display: block;
        overflow: hidden;
        height: auto;
        border-radius: 0;
        width: 100%;
        height: 1.87rem;
        font-size: 1rem;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0.5rem rgba(82, 168, 236, 0.6);
    border-radius: ${props => props.theme.BORDER_RADIUS};
    border-color: ${props => props.theme.BLUE};
    position: absolute;
    max-height: 15.62rem;
    overflow-y: scroll;
    width: 100%;
    background: ${props => props.theme.WHITE};
    top: 2.3rem;
    >span {
        line-height: 1.57rem;
        padding: 2px 5px;
        color: ${props => props.theme.LIGHT_BLACK};
        cursor: pointer;
    }
    .odd {
        background: ${props => props.theme.DARK_GREY};
    }
`