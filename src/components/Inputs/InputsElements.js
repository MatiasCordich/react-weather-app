import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

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
`

export const TemperatureBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    @media screen and (min-width: 990px) {
        width: 25%;
    }
`

export const TemperatureButton = styled.button`
    border: none;
    background: transparent;
    color: #fafafa;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 300;
`