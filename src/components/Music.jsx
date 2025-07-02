import "./Music.css";

function Music() {
  return (
    <div className="Music content-width">
      <div className="music-tag">
        <h1>Music</h1>
        <p className="music-intro">Some of my favorites...</p>
      </div>
      <div className="music-content">
        <div className="playlist-container">
          <iframe 
            style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/playlist/1LUv8lCss48NDhSBaxTHry?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
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