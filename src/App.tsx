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
    setBiathletes([...biathletes].sort((a, b) => (a.hits > b.hits ? -1 : 1)));
  };

  const onRate = () => {
    setBiathletes([...biathletes].sort((a, b) => a.rateOfFire - b.rateOfFire));
  };

  return (
    <div className="container">
      <h1 className="title">Test task!</h1>
      <input
        className="search"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div className="btn__wrapper">
        <button className="btn" type="button" onClick={onPlace}>
          Place
        </button>
        <button className="btn" type="button" onClick={onName}>
          Name
        </button>
        <button className="btn" type="button" onClick={onHits}>
          Hits
        </button>
        <button className="btn" type="button" onClick={onRate}>
          Rate of fire
        </button>
      </div>
      <ul className="biathletes__list">
        {biathletes
          .filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase()),
          )
          .map((biathlete: Biathlete) => (
            <li className="biathlete" key={biathlete.id}>
              <div className="place">{biathlete.place}</div>
              <div className="name">{biathlete.name}</div>
              <div className="info">
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
