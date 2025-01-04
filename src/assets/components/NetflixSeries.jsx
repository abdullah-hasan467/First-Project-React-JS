
import { SeriesCard } from "../components/List"; // Ensure correct path to SeriesCard component
import seriesData from "/src/api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map(curElem => {
        return (
          <SeriesCard key={curElem.id} curElem={curElem} /> // key prop correctly placed here
        );
      })}
    </ul>
  );
};

export default NetflixSeries;
