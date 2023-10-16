import styled from "styled-components";
import { InputBox } from "../Inputs/InputsElements";
import {
  DataBox,
  Data,
  Img,
} from "../TemperatureAndDetails/TemperatureDetailsElements";

export const ForecastBox = styled(InputBox)`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: var(--black-l);
  border: 1px solid var(--black-m);
  border-radius: 0.6rem;
  @media screen and (min-width: 990px) {
    margin: 2rem auto;
  }
`;
export const ForecastTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  color: var(--green);
  font-weight: 800;
  text-transform: Uppercase;

  @media screen and (min-width: 660px) {
    text-align: left;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 0.5rem auto;
`;
export const ForecastData = styled(DataBox)`
 

  @media screen and (min-width: 660px) {
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 2rem;
    gap: 5rem;
  }
`;
export const ForecastCard = styled(Data)`
  flex-direction: column;
`;
export const ForecastHour = styled.p`
  font-weight: 200;
`;

export const ForecastTemperature = styled(ForecastHour)`
  font-weight: 400;
`;

export const ForecastImg = styled(Img)``;
