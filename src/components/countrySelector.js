import { useState } from 'react';
import styled from 'styled-components';
import useStats from '../utils/useStats';
import Stats from './Stats';
import React from 'react';

const Selection = styled.div`
  font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-top: 20px;
`;
const Current = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  color: white;
  font-size: 1rem;
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('ISR');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
      <div>
          <Current>
              <h2>
              <span role="img" aria-label="crown">👑 </span>
                  Currently Showing {selectedCountry}</h2>
              </Current>
          <Selection>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
              </select>
              </Selection>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}