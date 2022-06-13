import Character from "./Character";
const CharacterList = (props) => {
  return (
    <ul>
      {(props.characters || []).map((char) => {
        return <Character url={char} />;
      })}
    </ul>
  );
};

export default CharacterList;
