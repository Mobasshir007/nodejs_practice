const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://mobasshirhussain2002_db_user:vlshS4In06ZJqJSW@cluster0.qur7fgt.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);
const dbName = "helloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("user2");

  //   insert data
  //   const data = {
  //     price: 51,
  //   };
  //   const isAlready = await collection.findOne({
  //     firstName: data.firstName,
  //   });

  //   if (isAlready) {
  //     console.log("user already exist");
  //     return 0;
  //   }
  //   const dt = await collection.updateOne(
  //     {
  //        firstName: "Nursid"
  //     },
  //     {
  //       $set: data
  //     },
  //   );
  //   console.log(dt);

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Data Inserted :", insertResult);
  // await collection.insertMany([{firstName:"Mobasshir",lastName:"Hussain",city:"Gurugram"}])
  //   Read;
  const findResult = await collection
    .find({ firstName: "Mobasshir" })
    .toArray();
  console.log("Document founded:", findResult);
  const countData = await collection.countDocuments({});
  console.log("Count is :", countData);
  return "Done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
