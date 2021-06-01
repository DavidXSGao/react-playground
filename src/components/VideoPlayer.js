import ReactPlayer from "react-player";

// https://www.npmjs.com/package/react-player
function VideoPlayer() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        onEnded={() => console.log("onEnded callback")}
      />
    </div>
  );
}

export default VideoPlayer;
