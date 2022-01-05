import React from 'react'

function AnimeCard({anime}) {
  return (
    <article className="anime-card">
      <a href={anime.url}
          target="_blank"
          rel="noreffer">
          <figure>
            <img src={anime.image_url} alt="ANime imag" />
          </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  )
}

export default AnimeCard
