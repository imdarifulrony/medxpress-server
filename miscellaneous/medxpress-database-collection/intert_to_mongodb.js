const { MongoClient } = require('mongodb');
const fs = require('fs');
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'medxpress';
const collectionName = 'medicines';
const dataFilePath = 'medicine_with_img_icons.json';

const readFileAsync = (filePath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

const modifyData = (data) => {
  return data.map((item) => {
    return {
      name: item.name,
      type: item.type,
      dosage_form: item.dosage_form,
      strength: item.strength,
      manufacturer: item.manufacturer,
      generics: item.generics,
      package_size: item.package_size,
      price: parseFloat(item.price),
      image: item.image,
      package_container: item.package_container,
    };
  });
};

const insertDataIntoMongoDB = async () => {
  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);

    const jsonData = await readFileAsync(dataFilePath);
    const parsedData = JSON.parse(jsonData);
    const modifiedData = modifyData(parsedData);

    for (const item of modifiedData) {
      item._id = (await collection.insertOne(item)).insertedId.toString();
    }

    const result = await collection.insertMany(modifiedData);
    console.log('Inserted documents with _ids:', result.insertedIds);
    client.close();
  } catch (error) {
    console.error('Error:', error);
  }
};

insertDataIntoMongoDB();
