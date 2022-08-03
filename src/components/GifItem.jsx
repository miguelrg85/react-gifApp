export const GifItem = ( { images, title } ) => {
  return (
      <div className="card">
        <img src={ images.original.url } alt={ title } crossOrigin={ "anonymous" }/>
        <p> { title }</p>
      </div>
  )
}
