import React, { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  if (!playState) {
    return null;
  }

  const closePlayer = (event) => {
    if (event.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      ref={player}
      onClick={closePlayer}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
    >
      <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
        <iframe
          src="https://www.youtube.com/embed/4MBKVASa8f0?autoplay=1"
          title="AMES Group introduction video"
          className="h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;

