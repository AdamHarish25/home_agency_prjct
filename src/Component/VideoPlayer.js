import { useRef, useState } from "react";
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import "./videoSlider.css";

let VideoPlayer = ({ src = "", size = "w-[400px] h-[400px]" }) => {
  let videoRef = useRef(null);
  let [playing, setPlaying] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);
  let [videoTime, setVideoTime] = useState(0);
  let [progress, setProgress] = useState(0);
  let [isHidden, setIsHidden] = useState(false);
  let sliderRef = useRef(null);
  let [isMuted, setIsMuted] = useState(false);

  let className = {
    videoContainer: `flex flex-col overflow-hidden ${size} relative rounded-xl`,
    video: `
      w-full h-full
    `,

    startButton:
      "text-white rounded-full border border-white p-8 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    startButtonIcon: "w-10 h-10",
    //Control
    controlContainer: `${
      isHidden === true ? "hidden" : "flex"
    } flex-col items-center w-full bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20`,
    control: "flex items-center justify-evenly pt-5 m-auto",
    controlIcons: "w-10 h-10 cursor-pointer mx-10 text-white",
    controlIconSmall: "w-8 h-8 cursor-pointer mx-10 text-white",

    //timeControl
    timeControl: `${
      (currentTime && progress) === 0 || isHidden === true ? "hidden" : "flex"
    } items-center justify-center gap-2 absolute bottom-5 inset-x-0 px-5`,
    timeProgressBarBox:
      "bg-gray-500 flex items-center rounded-[15px] w-full h-[5px] z-30 relative mx-5 group",
    controlsTime: "text-white flex items-center text-xs",
    muteButton: "w-5 h-5 text-white",
  };

  var videoDuration = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  var vid1 = document.getElementById("video1");

  let videoHandler = (control) => {
    if (control === "play") {
      handleVideoPlay();
    } else if (control === "pause") {
      handleVideoStop();
    }
  };

  let fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  let revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  var handleSeekMove = (e) => {
    videoRef.current.currentTime = e.target.value;

    setProgress(e.target.value);

    console.log(e.target.value);
  };

  var handleVideoPlay = () => {
    videoRef.current.play();
    setVideoTime(vid1.duration);
    setPlaying(true);
  };

  var handleVideoStop = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  console.log(videoDuration(videoTime));

  return (
    <div
      onMouseOver={() => setIsHidden(false)}
      onMouseOut={() => setIsHidden(true)}
      className={className.videoContainer}
    >
      <video
        onEnded={handleVideoStop}
        onPause={handleVideoStop}
        onPlay={handleVideoPlay}
        id="video1"
        muted={isMuted ? true : false}
        ref={videoRef}
        className={className.video}
      >
        <source src={src}></source>
      </video>
      {(currentTime && progress) === 0 ? (
        <button
          onClick={() => videoHandler("play")}
          className={className.startButton}
        >
          <FaPlay className={className.startButtonIcon} />
        </button>
      ) : (
        <div className={className.controlContainer}>
          <div className={className.control}>
            <FaBackward onClick={revert} className={className.controlIcons} />

            {playing ? (
              <FaPause
                onClick={() => videoHandler("pause")}
                className={className.controlIconSmall}
              />
            ) : (
              <FaPlay
                onClick={() => videoHandler("play")}
                className={className.controlIconSmall}
              />
            )}

            <FaForward
              onClick={fastForward}
              className={className.controlIcons}
            />
          </div>
        </div>
      )}

      <div className={className.timeControl}>
        <p className={className.controlsTime}>
          {videoDuration(currentTime) + "/" + videoDuration(videoTime)}
        </p>
        <div className={className.timeProgressBarBox}>
          <input
            type="range"
            id="seek"
            value={currentTime}
            max={videoTime}
            min={0}
            ref={sliderRef}
            onChange={handleSeekMove}
            style={{ backgroundSize: `${progress}% 100%` }}
          />
        </div>
        <button
          className={className.muteButton}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
