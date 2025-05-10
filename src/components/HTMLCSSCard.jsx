import "./HTMLCSSCard.css"

function HTMLCSSCard() {
  return (
    <div className="card-container">
      <div className="card">
        {/* Card Header Image */}
        <div className="card-header">
          <div className="graphic-elements">
            <div className="circle-black"></div>
            <div className="circle-yellow"></div>
            <div className="square-white">
              <div className="square-inner"></div>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-content">
          {/* Category Badge */}
          <div className="badge">Learning</div>

          {/* Date */}
          <div className="date">Published 21 Dec 2023</div>

          {/* Title */}
          <h2 className="title">HTML & CSS foundations</h2>

          {/* Description */}
          <p className="description">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>

          {/* Author */}
          <div className="author">
            <div className="author-avatar"></div>
            <span className="author-name">Greg Hooper</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTMLCSSCard
