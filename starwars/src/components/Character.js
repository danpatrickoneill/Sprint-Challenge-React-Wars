import React from "react";

const Character = props => {
  const usefulKeys = Object.keys(props.char).slice(0, 7);
  console.log(props.char.name);
  return (
    <ul className="character">
      {usefulKeys.map(key => (
        <li>
          {key}: {props.char[key]}
        </li>
      ))}
    </ul>
  );
};

export default Character;
