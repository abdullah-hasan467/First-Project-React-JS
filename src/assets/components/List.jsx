 

export const SeriesCard = ({ data }) => {
  // Destructure properties from 'data'
  const { name, img_url, rating, description, cast, genre, watch_url } = data;

  return <li className="card">
      <img src={img_url} alt={name} width="100%" height="auto" />
      <div className="card-container">
        <h2>
          Name: {name}
        </h2>
        <h3>
          Ratings: {rating}
        </h3>
        <p style={{ margin: "1.2rem" }}>
          Summary: {description}
        </p>
        <h3>
          Cast: {cast}
        </h3>
        <h3>
          Genre: {genre}
        </h3>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button style={{ padding: "1.2rem 2.4rem", border: "0.3rem solid red", fontSize: "1.6rem", backgroundColor: "var(--btn-hover-bg-color)", color: "black", cursor: "pointer", transition: "background-color 0.3s ease" } // Fixed the border declaration // Added cursor for better UX // Added transition for hover effect
            }>
            Watch Now
          </button>
        </a>
      </div>
    </li>;
};
