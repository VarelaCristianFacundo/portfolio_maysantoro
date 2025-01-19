

function EmbedArtist() {
  return (
    <div className="w-full flex justify-center pt-[15px] pb-[65px]">
      <iframe
        className="w-4/5 sm:w-3/5"
        src="https://open.spotify.com/embed/artist/6ObwluZSrj3FxKRuH7JBau?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default EmbedArtist;