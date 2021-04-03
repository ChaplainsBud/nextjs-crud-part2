import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'

// "()" is where you place HTML, both as a whole and within for a map method
// { return () }
// { => () } 

/*
function Component({ props }) {
      return (
          
      )
}
*/

export default function Movies({ movies }) {
    return (
        <div>
            <h1>Places Worth Sleeping At</h1>
            <Link href="/"><a>Go Back Home</a></Link>
            <p><small>According to AirBnB</small></p>
            
            <ul>

                {movies.map((movie) => (
                    <li>
                        <h2>Name: {movie.name}</h2>
                        <h3>Space: {movie.space}</h3>
                        <p>bedrooms: {movie.bedrooms}</p>
                        <h5>beds: {movie.beds}</h5>
                        <h6>maximum nights: {movie.maximum_nights}</h6>
                    </li>
                ))}    

            </ul>

        </div>
    );
}

// getServerSideProps() method runs on the backend, gets data, 
// and sends it into the React component via props. 

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("listingsAndReviews")
    .find({})
    // .sort({ metacritic: -1 })
    .limit(10)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}