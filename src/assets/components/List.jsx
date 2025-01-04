export const SeriesCard = (props) => {
  return (
    <li>
      <img
        src={props.curElem.img_url}
        alt={props.curElem.name}
        width="80%"
        height="auto"
      />
      <div>
        <h2>
          Name: {props.curElem.name}
        </h2>
        <h3>
          Ratings: {props.curElem.rating}
        </h3>
        <p>
          Summary: {props.curElem.description}
        </p>
        <h3>
          Cast: {props.curElem.cast}
        </h3>
        <h3>
          Genre: {props.curElem.genre}
        </h3>
        <a
          href={props.curElem.watch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
