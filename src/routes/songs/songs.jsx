export default function Songs () {
  return (
    <>
      <h1 className="title center">Camp Songs</h1>
      <div id="spotifyembedcontainer">
        <iframe style={{"borderRadius": "12px"}} src="https://open.spotify.com/embed/playlist/41IJktFXoX7x9NABcLA4kN?utm_source=generator&theme=0" width="80%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </>
  )
}