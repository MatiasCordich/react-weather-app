import styled from "styled-components";
import {
  Data,
  Img,
} from "../TemperatureAndDetails/TemperatureDetailsElements";

export const ForecastBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  border-radius: 0.6rem;
  justify-content: stretch;
`;
export const ForecastTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  font-size: 3rem;
  color: var(--green);
  font-weight: 800;
  text-transform: Uppercase;
  padding: 2rem;
  gap: 1.5rem;

  @media (min-width: 900px) {
      text-align: left;
  }
`;

export const Line = styled.hr`
  width: 100%;
`;
export const ForecastData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: scroll;
  padding: 1rem;
  gap: 1rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ForecastCard = styled(Data)`
  flex-direction: column;
`;
export const ForecastHour = styled.p`
  color: var(--green);
  font-weight: 500;
`;

export const ForecastImg = styled(Img)`
  background-color: var(--black-s);
`;

export const ForecastTemperature = styled(ForecastHour)`
  font-weight: 400;
`;


