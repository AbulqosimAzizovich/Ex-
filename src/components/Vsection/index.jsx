import { useState, useRef } from "react";
import video from "../../assets/video/video.mp4";
import poster from "../../assets/images/poster.png";
import Play from "../../assets/icons/Play";
import Pause from "../../assets/icons/Pause";

const index = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
      setPlay(true);
    } else {
      videoElement.pause();
      setPlay(false);
    }
  };

  return (
    <section className="pt-[87px]">
      <div className="container">
        <div className="flex flex-col gap-y-[72px]">
          <div className="relative rounded-[68px]">
            <span
              onClick={() => handlePlayClick()}
              className="absolute right-10 top-10 cursor-pointer z-10"
            >
              {play ? <Pause /> : <Play />}
            </span>
            <video
              className="w-full h-full"
              poster={poster}
              ref={videoRef}
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
