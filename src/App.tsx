import React, { FC, useState } from 'react';
import { initData } from './db';
import { Biathlete } from './types';

const App: FC = () => {
  const [name, setName] = useState('');
  const [biathletes, setBiathletes] = useState(initData);

  const onPlace = () => {
    setBiathletes([...biathletes].sort((a, b) => a.place - b.place));
  };

  const onName = () => {
    setBiathletes([...biathletes].sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const onHits = () => {
    setBiathletes([...biathletes].sort((a, b) => (a.hits > b.hits ? 1 : -1)));
  };

  const onRate = () => {
    setBiathletes([...biathletes].sort((a, b) => a.rateOfFire - b.rateOfFire));
  };

  return (
    <div>
      <h1>Test task!</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div>
        <button type="button" onClick={onPlace}>
          Place
        </button>
        <button type="button" onClick={onName}>
          Name
        </button>
        <button type="button" onClick={onHits}>
          Hits
        </button>
        <button type="button" onClick={onRate}>
          Rate of fire
        </button>
      </div>
      <ul>
        {biathletes
          .filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase()),
          )
          .map((biathlete: Biathlete) => (
            <li key={biathlete.id}>
              <div>{biathlete.place}</div>
              <div>{biathlete.name}</div>
              <div>
                <div>Hits: {biathlete.hits}%</div>
                <div>Rate of fire: {biathlete.rateOfFire} sec</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
