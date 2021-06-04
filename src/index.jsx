import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Joke } from './Joke';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vtipy</h1>
      </header>
      {
        <main>
          {jokes.map((joke, index) => {
            return (
              <Joke
                key={joke.id}
                userAvatar={joke.userAvatar}
                userName={joke.userName}
                text={joke.text}
                likes={joke.likes}
                dislikes={joke.dislikes}
              />
            );
          })}
        </main>
      }
    </div>
  );
};
render(<App />, document.querySelector('#app'));
