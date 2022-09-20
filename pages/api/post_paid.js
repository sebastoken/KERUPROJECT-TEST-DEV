import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
  const data = req.body;
  const client = await 
  MongoClient.connect(
    process.env.MONGODB_URI);
  const db = client.db();
  let DOP = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let Date_format_fr = DOP.toLocaleDateString(undefined, options)
  const yourCollection = db.collection("NFT_record");
  const result = await yourCollection.updateOne(
    { email: data.email}, 
    {'$push': {"NFT_collection":{location:data.location, image_url:data.image_url , edition: data.edition,dateOpurchase: DOP,dateOpurchase_format_fr: Date_format_fr}}}
    ,{upsert:true})
    console.log(result);
    client.close();
  res.status(201).json({ message: "Data inserted successfully!" });
  }
}
