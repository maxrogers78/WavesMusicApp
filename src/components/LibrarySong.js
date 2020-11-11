// React
import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
  };

  return (
    <>
      <div className="library-song" onClick={songSelectHandler}>
        <img src={song.cover} alt={song.name} />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </>
  );
};

export default LibrarySong;
