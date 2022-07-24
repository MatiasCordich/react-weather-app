import styled from 'styled-components'

export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media (min-width: 660px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2rem;
    }
`
export const ButtonCity = styled.button`
    background-color: transparent;
    border: none;
    color: #fafafa;
    font-size: 1.9rem;
    font-weight: 300;
    padding: 2rem;
    display: ${props => (props.open ? "none" : "block")};

    @media screen and (min-width: 660px) {
        display: block;
    }
`



