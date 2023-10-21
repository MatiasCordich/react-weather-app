import styled from "styled-components";

export const SContent = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
`
export const SwitchBox = styled.div`
  width: 5rem;
  height: 2.7rem;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 98rem;
  padding: .1rem;
  cursor: pointer;

  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

export const Switch = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: var(--green);
`;
