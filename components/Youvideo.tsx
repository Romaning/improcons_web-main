import React from "react";
import YouTube from "react-youtube";

export default function YoutubeVideo() {
  const opts = {
    height: "773",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-custom-4">
      <div className="md:px-9 lg:px-28 lg:py-12">
        {/* Cambiar el videoId en base al video necesitado de YouTube */}
        <YouTube videoId="yj9MNMN60Rk" opts={opts} />
      </div>
    </div>
  );
}
