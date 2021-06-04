import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(props.likes);
  const [downLikes, setDownLikes] = useState(props.dislikes);

  const handleUpLikes = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDownLikes = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="container">
      <div className={upLikes > downLikes ? 'joke' : 'joke joke--not-funny'}>
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src={props.userAvatar ? props.userAvatar : null}
              alt={`Tady má být avatar.`}
            />
            <p className="user-name">{props.userName}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>

        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleUpLikes}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {upLikes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleDownLikes}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {downLikes}
          </span>
        </div>
      </div>
    </div>
  );
};
