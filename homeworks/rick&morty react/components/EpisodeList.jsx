import Episode from "./Episode";
const EpisodeList = (props) => {
  return (
    <ul>
      {(props.episodes || []).map((ep) => {
        return <Episode {...ep} />;
      })}
    </ul>
  );
};

export default EpisodeList;
