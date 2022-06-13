import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import EpisodeList from "./components/EpisodeList";
import CharacterList from "./components/CharacterList";
function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((response) => response.json())
      .then(function (data) {
        setEpisodes(data.results);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <header>Rick & Morty</header>
      <EpisodeList episodes={episodes} />
      {episodes.length ? (
        <CharacterList characters={episodes[selectedEpisode].characters} />
      ) : null}
    </div>
  );
}

export default App;
