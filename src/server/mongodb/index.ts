import { MongoClient, ServerApiVersion, WithId } from "mongodb";
import * as Types from "../../../Types";
import { DB_CONFIG } from "../config";

const Mongo_Protocol = DB_CONFIG.protocol;
const Mongo_Host = DB_CONFIG.host;
const Mongo_Port = DB_CONFIG.port ? `:${DB_CONFIG.port}` : '';
const Mongo_Database = DB_CONFIG.database || '';
const Mongo_Username = DB_CONFIG.username || '';
const Mongo_Password = DB_CONFIG.password ? `:${DB_CONFIG.password}` : '';

console.log({
  Mongo_Username,
  Mongo_Password
})

const Mongo_Credentials = Mongo_Username || Mongo_Password ? `${Mongo_Username}${Mongo_Password}@` : ''

const uri = `${Mongo_Protocol}//${Mongo_Credentials}${Mongo_Host}${Mongo_Port}/${Mongo_Database}?retryWrites=true&w=majority`;

console.log('mongodb', uri)

const client: MongoClient = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

//@ this function queries the MongoDB cluster for a player matching the specific username
const getPlayerInfo = async (username: string) => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const result = await client.db("EricDB").collection("PlayerInfo").findOne<Types.IPlayerDataFromMongo>({ username });

    if (result !== null) {
      // if there is a result, return it

      return result;
    } else {
      // otherwise throw an error - the user was not found
      throw new Error(`Player with username ${username} not found`);
    }
  } catch (e) {
    // log the error message if any occur
    console.log(e.message);
    // throwing this to the route allows the route to have context of the error message
    throw new Error(e.message);
  } finally {
    // the finally block always executes, regardless of the presence of an error, and before any control-flow statements
    await client.close();
  }
};

//@ this function creates a new player document in the PlayerInfo collection
const registerNewPlayer = async (newPlayerInfo: Types.IPlayerPayload) => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // attempt to register the player, will throw an error if newPlayerInfo contains a duplicate email or username
    await client.db("EricDB").collection("PlayerInfo").insertOne(newPlayerInfo);
  } catch (e) {
    // log the error message if any occur
    console.log(e.message);
    // throwing this to the route allows the route to have context of the error message
    throw new Error(e.message);
  } finally {
    // the finally block always executes, regardless of the presence of an error, and before any control-flow statements
    await client.close();
  }
};

//@ this function will update a player's information in the PlayerInfo collection
const updatePlayerInfo = async (playerName: string, playerInfo: Types.IPlayerPayload) => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const result = await client.db("EricDB").collection("PlayerInfo").updateOne({ username: playerName }, { $set: playerInfo });

    if (result) {
      // if there is a result, return it
      return result;
    } else {
      console.log(`No results`);
      throw new Error();
    }
  } catch (e) {
    // log the error message if any occur
    console.log(e.message);
    // throwing this to the route allows the route to have context of the error message
    throw new Error(e.message);
  } finally {
    // the finally block always executes, regardless of the presence of an error, and before any control-flow statements
    await client.close();
  }
};

export const MongoQuery = {
  getPlayerInfo,
  registerNewPlayer,
  updatePlayerInfo,
};
