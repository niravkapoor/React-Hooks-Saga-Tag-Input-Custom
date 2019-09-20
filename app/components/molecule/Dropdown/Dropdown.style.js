import styled, { css } from 'styled-components';

export default css``;

export const DropdownDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: ${props => props.theme.BORDER_RADIUS};
    background-color: ${props => props.theme.WHITE};
    border: 1px solid #cccccc;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    padding: 0.25rem;
    margin: 0 auto;
    max-width: 75vw;
    align-items: center;
`