const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'recipes';

async function addRecipe(recipe) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const recipes = db.collection('recipes');
    const result = await recipes.insertOne(recipe);
    console.log(`Recipe added with ID: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
