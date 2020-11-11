// React
import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    audioRef.current.play();

    const newSongs = songs.map((item) => {
      if (item.id === song.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setSongs(newSongs);
  };

  return (
    <>
      <div
        className={`library-song ${song.active ? "selected" : ""}`}
        onClick={songSelectHandler}
      >
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
