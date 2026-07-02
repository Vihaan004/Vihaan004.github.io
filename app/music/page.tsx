import React from 'react';

export default function Music() {
    return (
        <div>
            <p>Playlists on repeat right now...</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '10px' }}
                src="https://open.spotify.com/embed/playlist/0uEuh80XLferiwcsp5nZ6I?utm_source=generator&theme=0"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius: '10px' }} 
                src="https://open.spotify.com/embed/playlist/2GkHemFyGmExvR9WyXH0xt?utm_source=generator&theme=0&si=5c71e3213f914727"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
        </div>
    );
};