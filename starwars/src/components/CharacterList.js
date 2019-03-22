import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="CharacterList">
      {props.chars.map(char => (
        <Character char={char} />
      ))}
    </div>
  );
};

export default CharacterList;
