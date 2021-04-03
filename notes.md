import { connectToDatabase } from '../../util/mongodb';

// I've handcoded the CRUD. Now I need to figure out how to do it by UI, React Components

// I. CREATE
// export default async function handler(req, res){
// const { db } = await connectToDatabase();

// await db.collection("kittens").insertOne({name: "Timmy"}); // CREATE
// const data = await db.collection("kittens").find({}).limit(5).toArray(); // READ

// res.json(data);
// }

// II. READ
// export default async function handler(req, res){
// const { db } = await connectToDatabase();

// const data = await db.collection("kittens").find({}).limit(5).toArray();

// res.json(data);
// }
// just do CRUD handcoded first, right here

// III. UPDATE
// export default async function handler(req, res){
// const { db } = await connectToDatabase();

// // need to work on condition: if(true) => update
// db.collection("kittens").updateOne({name:"Timmy"}, { $set: {name: "Titus"}}); // UPDATE

// const data = await db.collection("kittens").find({}).limit(5).toArray(); // READ

// res.json(data);
// }

// Delete -> BUG: one time it changed Titus to Timmy. Now it removes completely
export default async function handler(req, res){
const { db } = await connectToDatabase();

await db.collection("kittens").deleteOne({ name: "Timmy"}) // DELETE

const data = await db.collection("kittens").find({}).limit(5).toArray(); // READ

res.json(data);
}
