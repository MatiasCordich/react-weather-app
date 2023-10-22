import styled from 'styled-components'

export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundBox};
    border: ${({ theme }) => theme.colors.border};
    border-radius: 0.6rem;

    @media (min-width: 768px) {
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
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .3rem;
    padding: 2rem;
    display: ${props => (props.open ? "none" : "block")};
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: block;
    }
`



