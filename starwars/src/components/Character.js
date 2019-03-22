import React from "react";

const Character = props => {
  const usefulKeys = Object.keys(props.char).slice(1, 7);
  console.log(props.char.name);
  return (
    <ul className="Character">
      <h2>{props.char.name}</h2>
      {usefulKeys.map(key => (
        <li>
          {key}: {props.char[key]}
        </li>
      ))}
    </ul>
  );
};

export default Character;
