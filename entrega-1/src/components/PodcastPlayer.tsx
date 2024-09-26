import React, { useEffect, useState } from 'react';

interface Episode {
    id: number;
    title: string;
    description: string;
    urls: {
    high_mp3: string;
    };
    channel: {
    urls: {
        logo_image: {
        original: string;
        };
    };
    };
}

function PodcastPlayer() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
    fetch('https://api.audioboom.com/audio_clips')
    .then(response => response.json())
    .then(data => {
    setEpisodes(data.body.audio_clips);
    });
    }, []);

  const handlePlay = (url: string) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(url);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div>
      {episodes.map(episode => (
        <div key={episode.id}>
          <h3>{episode.title.length > 30 ? `${episode.title.substring(0, 27)}...` : episode.title}</h3>
          <p>{episode.description.length > 100 ? `${episode.description.substring(0, 97)}...` : episode.description}</p>
          <img src={episode.channel.urls.logo_image.original} alt="Logo" />
          <button onClick={() => handlePlay(episode.urls.high_mp3)}>Play</button>
        </div>
      ))}
    </div>
  );
}

export default PodcastPlayer;
