import './Feature.css';

function Feature() {

  return (
    <section className="feature">
      <h2>Explore Our Featured Options</h2>
      <p>Discover a curated selection of movies and shows just for you.</p>
      <div className="feature-buttons">
        <button>Browse Movies</button>
        <button>Watch Trailers</button>
        <button>See Recommendations</button>
      </div>
      <div className="feature-images">
        <img src="./assets/creed.jpg" alt="Creed" />
        <img src="./assets/creed2.jpg" alt="Creed 2" />
        <img src="./assets/creed3.jpg" alt="Creed 3" />
      </div>
    </section>
  )
}

export default Feature;