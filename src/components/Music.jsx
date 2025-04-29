import "./Music.css";

function Music() {
  return (
    <div className="Music">
      <div className="music-tag">
        <h1>Music</h1>
      </div>
      <div className="music-content">
        <p className="music-intro">Here's what I've been listening to lately:</p>
        <div className="playlist-container">
          <iframe 
            style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/playlist/1LUv8lCss48NDhSBaxTHry?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Music;