import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 220rem;
  width: 100%;
  margin: 5rem auto;
`;

export const WeatherBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WeatherContent = styled.div`
  background-color: var(--black-s);
  border: 1px solid var(--black-m);
  border-radius: 0.6rem;
  padding: 2rem;
  display: flex;
  gap: 1rem;
`;

export const WheaterDetails = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 80%;
`;

export const WheaterForecastBox = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 80%;
`;
