import seriesData from "/src/api/seriesData.json";

const NetflixSeries = () => {
  return (
    <div>
      {seriesData.map((series, index) =>
        <div key={index}>
          <img
            src={series.img_url}
            alt="{series.name}"
            width="80%"
            height="auto"
          />
          <div>
            <h2>
              Name: {series.name}
            </h2>
            <h3>
              Ratings: {series.rating}
            </h3>
            <p>
              Summary: {series.description}
            </p>
            <h3>
              Cast: {series.cast}
            </h3>
            <h3>
              Genre: {series.genre}
            </h3>
            <a
              href={series.watch_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetflixSeries;
