import styled from "styled-components";
import { InputBox } from "../Inputs/InputsElements";

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  border-radius: 0.6rem;
  width: 100%;
`;

export const DetailText = styled.p`
  text-align: left;
  color: var(--green);
  font-size: 2rem;
  font-weight: 800;
`;

export const TemperatureBox = styled.div`
  background-color: var(--black-s);
  border: 1px solid var(--black-m);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  justify-content: center;
`;

export const TempBoxFirst = styled.div`
  display: flex;
  gap: 1rem;
`

export const Img = styled.img`
  width: 100%;
  max-width: 20rem;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  border-radius: 0.4rem;

`;
export const TemperatureText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  border-radius: 0.4rem;
  width: 100%;
  font-size: 9rem;
  font-weight: 900;
  color: var(--green);
  padding: 1.5rem;
`;
export const OthersDetails = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  color: var(--green);
  font-weight: 500;
  border-radius: 0.4rem;
  gap: 1.5rem;
`;
export const Details = styled.div`
  font-size: 1.6rem;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.span`
  
`;

export const UpAndDown = styled(InputBox)`
  width: 100%;
  color: var(--green);
`;

export const DataBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  

  @media screen and (min-width: 660px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const Data = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ForecastText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;
