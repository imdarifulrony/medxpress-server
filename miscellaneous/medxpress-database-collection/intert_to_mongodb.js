const { MongoClient } = require('mongodb');
const fs = require('fs');

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'medxpress';
const collectionName = 'medicines';

const dataFilePath = 'medicine_cleaned.json';

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const insertDataIntoMongoDB = async () => {
  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const jsonData = await readFileAsync(dataFilePath);
    const data = JSON.parse(jsonData);

    for (const item of data) {
      item._id = (await collection.insertOne(item)).insertedId.toString();
    }

    const result = await collection.insertMany(data);

    console.log('Inserted documents with _ids:', result.insertedIds);

    client.close();
  } catch (err) {
    console.error('Error:', err);
  }
};

insertDataIntoMongoDB();
