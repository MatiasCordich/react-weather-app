import styled from "styled-components";

export const DetailsBox = styled.div`
  padding: 1rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// BOX 1

export const TemperatureBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TempBoxFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
      flex-direction: row;
  }
`

export const Img = styled.img`
  width: 100%;
  max-width: 20rem;
  background-color: ${({ theme }) => theme.colors.backgroundImg};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 0.4rem;
`;

export const TemperatureText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 0.4rem;
  width: 100%;
  font-size: 9rem;
  font-weight: 900;
  color: var(--green);
  padding: 1.5rem;
`;

export const DetailText = styled.span`
  text-align: center;
  color: var(--green);
  font-size: 2rem;
  font-weight: 800;
`;

// BOX 2

export const OthersDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  color: var(--green);
  font-weight: 600;
  border-radius: 0.4rem;
  gap: 1.5rem;

  @media (min-width: 768px ) {
      flex-direction: row;
  }
`;
export const Details = styled.div`
  font-size: 1.6rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.span`
`;

// BOX 3
export const UpAndDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundBox};
  border: ${({ theme }) => theme.colors.border};
  border-radius: 0.4rem;
  padding: 1rem;
  color: var(--green);

`;

export const DataBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 768px) {
      flex-direction: row;
      padding: 1rem;
  }
`;
export const Data = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ForecastText = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;
