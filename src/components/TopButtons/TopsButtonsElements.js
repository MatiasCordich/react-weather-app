import styled from 'styled-components'

export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--black-s);
    border: 1px solid var(--black-m);
    border-radius: 0.6rem;
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
    color: var(--green);
    font-size: 1.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .3rem;
    padding: 2rem;
    display: ${props => (props.open ? "none" : "block")};
    cursor: pointer;

    @media screen and (min-width: 660px) {
        display: block;
    }
`



