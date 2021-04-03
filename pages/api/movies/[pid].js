import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { pid } = await req.query

  const { db } = await connectToDatabase();


  const movies = await db
    .collection("listingsAndReviews")
    // .find({"year": Number(`${pid}`)})
    .find({"bedrooms": Number(`${pid}`)})

    .sort({ metacritic: -1 })
    .limit(5)
    .toArray();

  res.json(movies);
};