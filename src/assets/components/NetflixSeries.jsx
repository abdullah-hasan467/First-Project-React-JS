import seriesData from "/src/api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <img
              src={curElem.img_url}
              alt={curElem.name}
              width="80%"
              height="auto"
            />
            <div>
              <h2>
                Name: {curElem.name}
              </h2>
              <h3>
                Ratings: {curElem.rating}
              </h3>
              <p>
                Summary: {curElem.description}
              </p>
              <h3>
                Cast: {curElem.cast}
              </h3>
              <h3>
                Genre: {curElem.genre}
              </h3>
              <a
                href={curElem.watch_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Watch Now</button>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;
