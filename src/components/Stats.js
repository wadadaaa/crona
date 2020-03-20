import styled from 'styled-components';
import useStats from '../utils/useStats';
import React from 'react';

const StyledP = styled.p`
  color: white;
  margin: 40px;
  font-size: 1rem;
  font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  color: white;
  font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
`;
const StatBlock = styled.div`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin: 10px;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <StyledP>Loading...</StyledP>;
  if (error || stats.confirmed === undefined) return <StyledP>Error...</StyledP>;
  return (
    <StatGrid>
      <StatBlock>
        <h2><span role="img" aria-label="virus">🦠 </span>
        Confirmed:</h2>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3><span role="img" aria-label="death">💀 </span>
        Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
              <h3><span role="img" aria-label="recover">🙋‍♀️ </span>
                  Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  );
}