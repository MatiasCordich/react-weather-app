import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: var(--black-s);
    border: 1px solid var(--black-m);
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
    border: none;
    width: 90%;
    background-color: var(--black-s);
    color: var(--green);
    font-size: 1.8rem;
    border-bottom: 2px solid var(--white);

    ::placeholder{
        color: var(--green);
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
    background-color: var(--black-l);
    border: 1px solid var(--black-m);
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