import styled from "styled-components";

export const TimeAndLocationBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    align-items: flex-start;
  }
`;

export const TimeText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  color: var(--green);
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

export const LocationText = styled(TimeText)`
  margin: 3rem 0;
  font-size: 5rem;
  font-weight: 800;
`;
