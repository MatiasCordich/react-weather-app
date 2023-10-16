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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const WheaterDetails = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const FBox = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
