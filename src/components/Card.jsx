function Card({ imageUrl, title, children }) {
  return (
    <div className="card h-100 d-flex flex-column">
      {imageUrl && (
        <img 
          src={imageUrl} 
          className="card-img-top" 
          alt={title}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="card-text flex-grow-1">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card