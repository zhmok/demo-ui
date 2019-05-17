import React, { useState, useEffect } from "react";

import { statement } from "@babel/template";

// const musicBasePath = "http://47.103.1.227:8000/";
const musicBasePath = [
  "http://47.103.1.227:8000/chaine_x.mp3",
  "http://47.103.1.227:8000/dark_side.mp3",
  "http://47.103.1.227:8000/hall_of_fame.mp3",
  "http://47.103.1.227:8000/blue_skies.mp3"
];

const BlueSkies = () => {
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicPath, setMusicPath] = useState(musicBasePath[musicIndex]);

  useEffect(() => {});

  function onDed() {
    let nextMusicIndex = "";
    if (musicIndex !== undefined) {
      nextMusicIndex = musicIndex === musicBasePath.length ? 0 : musicIndex + 1;
      setMusicIndex(nextMusicIndex);
      setMusicPath(musicBasePath[nextMusicIndex]);
    }
    console.log("播放完毕下一曲:", musicBasePath[nextMusicIndex]);
  }

  return (
    <audio autoPlay loop onWaiting={onDed}>
      <source src={musicPath} type="audio/mpeg" />
      <source src={musicPath} type="audio/ogg" />
    </audio>
  );
};

// BlueSkies
// exports

export { BlueSkies };
