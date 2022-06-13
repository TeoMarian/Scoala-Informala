import { useState, useEffect } from "react";
const Character = (props) => {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then(function (data) {
        setCharacter(data);
        console.log(data);
      });
  }, []);
  return character ? <h2>{character.name}</h2> : <h2>Loading</h2>;
};
export default Character;
