import styled from "styled-components";

export const MenuButtonBox = styled.button`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 3rem;
    border: none;
    background: transparent;
    color: #fafafa;
    width: 100%;
    padding: 2rem;
    
    @media (min-width: 768px) {
        display: none;
    }
`