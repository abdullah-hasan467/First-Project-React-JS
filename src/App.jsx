import "../src/assets/components/netflex.css";
import NetflixSeries from "./assets/components/NetflixSeries";



export const App = () => {
  return (
    <section className="container">
    <h1 className="Title"> The Best Series for You </h1>
      <NetflixSeries  />
     
    </section>
  );
};