const Episode = (props) => {
  return (
    <>
      <h2>
        {" "}
        Episode {props.episode}: {props.name}{" "}
      </h2>
      <button>View Characters</button>
    </>
  );
};
export default Episode;
