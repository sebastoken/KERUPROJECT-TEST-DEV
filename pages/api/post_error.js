import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
  const data = req.body;
  const client = await 
  MongoClient.connect(
    process.env.MONGODB_URI);
  const db = client.db();
  let DOE = new Date()
  const yourCollection = db.collection("error_mail_send");
  const result = await yourCollection.insertOne(
    { email: data.email, name: data.souvenir_name,error:data.error,dateOerror: DOE })
  console.log(result);
  client.close();
  res.status(201).json({ message: "Data inserted successfully!" });
  }
}