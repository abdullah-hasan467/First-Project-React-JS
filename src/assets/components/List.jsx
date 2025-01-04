export const SeriesCard = ({ data }) => {
         const { name, id, img_url, rating, description, cast, genre, watch_url } = data;
         return <li>
             <img src={img_url} alt={name} width="80%" height="auto" />
             <div>
               <h2>
                 Name: {name}
               </h2>
               <h3>
                 Ratings: {rating}
               </h3>
               <p>
                 Summary: {description}
               </p>
               <h3>
                 Cast: {cast}
               </h3>
               <h3>
                 Genre: {genre}
               </h3>
               <a href={watch_url} target="_blank" rel="noopener noreferrer">
                 <button>Watch Now</button>
               </a>
             </div>
           </li>;
       };
