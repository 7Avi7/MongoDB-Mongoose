const { MongoClient, Long } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const personInf = {
  name: "avi",
};

const main = async () => {
  await client.connect();

  const db = client.db("shop");

  const collection = db.collection("products");

  // await collection.insertOne(personInf);

  const data = await collection.find({ name: "avi" }).toArray();
  console.log(data);
  return "done";
};

main()
  .then(console.log())
  .catch((e) => console.log(e))
  .finally(() => client.close());
