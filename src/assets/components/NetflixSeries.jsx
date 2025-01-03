const NetflixSeries = () => {
  const name = 'Ugreen Headphone';
  const ratings = 8.2;
  const summary = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  const age = 10;
  return (
    <div>
    <h2>
    <h1></h1> </h2>
      <div>
        <img src="img.jpg" alt="icon" width="80%" height="auto" />
      </div>
      <div>
        <h2>Name: {name}</h2>
        <h3>Ratings: {ratings}</h3>
        <p>Summary: {summary}</p>
        <button> {age>= 18? "Watch Now": "Not Avaibale"}</button>
      </div>
    </div>
  );
};


export default NetflixSeries;