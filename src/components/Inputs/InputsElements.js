import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: var(--black-s);
    border: 1px solid var(--black-m);
    border-radius: 0.6rem;

    @media screen and (min-width: 990px) {
        flex-direction: row;
        padding: 2rem;
        margin: 0 auto;
        width: 70%;
    }

`

export const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 2rem;

    @media screen and (min-width: 990px) {
        width: 50%;
    }

`

export const Search = styled.input`
    outline: none;
    padding: 1rem 2rem;
    border: none;
    width: 50%;
    background-color: var(--black-s);
    color: var(--green);
    font-size: 1.8rem;
    border-bottom: 2px solid var(--white);

    ::placeholder{
        color: var(--green);
    }
`

export const TemperatureBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--black-l);
    border: 1px solid var(--black-m);
    border-radius: 0.6rem;
    
    @media screen and (min-width: 990px) {
        width: 25%;
    }
`

export const TemperatureButton = styled.button`
    border: none;
    background: transparent;
    color: var(--green);
    cursor: pointer;
    font-size: 2rem;
    font-weight: 500;
`