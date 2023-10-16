import styled from "styled-components";
import { InputBox } from "../Inputs/InputsElements";

export const TimeAndLocationBox = styled.div`
  background-color: var(--black-s);
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  padding: 1.5rem;
  border-radius: 0.6rem;
  width: 100%;

  @media screen and (min-width: 990px) {
    margin: auto;
    justify-content: center;
  }
`;

export const TimeText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  text-align: left;
  color: var(--green);
`;

export const LocationText = styled(TimeText)`
  margin: 3rem 0;
  font-size: 5rem;
  font-weight: 800;
`;
