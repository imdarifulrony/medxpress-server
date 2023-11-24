const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'medxpress';
const collectionName = 'medicines';

async function findAndDeleteDuplicates() {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const fieldToCheck = 'name';

    const pipeline = [
      {
        $group: {
          _id: {
            $trim: { input: `$${fieldToCheck}` },
          },
          count: { $sum: 1 },
          duplicates: { $push: '$_id' },
        },
      },
      {
        $match: {
          count: { $gt: 1 },
        },
      },
    ];

    const duplicateDocs = await collection.aggregate(pipeline).toArray();

    for (const duplicateDoc of duplicateDocs) {
      const [firstDocId, ...otherDocIds] = duplicateDoc.duplicates;

      await collection.deleteMany({ _id: { $in: otherDocIds } });
    }

    console.log('Duplicate documents (ignoring spaces) deleted.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    client.close();
  }
}

findAndDeleteDuplicates();
