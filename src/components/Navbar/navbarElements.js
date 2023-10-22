import styled from "styled-components";

export const SContent = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
  color: var(--green);
`
export const SwitchBox = styled.div`
  width: 5rem;
  height: 2.7rem;
  background-color: ${({ theme }) => theme.colors.backgroundBox};
    border: ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content:  ${({theme}) => theme.colors.flexDirection};
  border-radius: 98rem;
  padding: .1rem;
  cursor: pointer;
`;

export const Switch = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: var(--green);
  
`;
