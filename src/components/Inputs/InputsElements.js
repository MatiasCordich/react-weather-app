import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundBox};
    border: ${({ theme }) => theme.colors.border};
    border-radius: 0.6rem;
    padding: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const Search = styled.input`
    padding: 1rem 2rem;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.inputText};
    font-size: 1.8rem;
    border: ${({ theme }) => theme.colors.border};

    ::placeholder{
        color: ${({ theme }) => theme.colors.inputText};
    }
`

export const InputsBtnBox = styled.div`
    display: flex;
    padding: 1rem;
    gap: 3rem;
`

export const TemperatureBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: ${({ theme }) => theme.colors.border};
    border-radius: 0.6rem;
    padding: 1rem;
    
    @media screen and (min-width: 768px) {
        width: 35%;
    }
`

export const TemperatureButton = styled.button`
    border: none;
    background: transparent;
    color: var(--green);
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    font-weight: 500;
`