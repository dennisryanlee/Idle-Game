import * as dotenv from "dotenv";
dotenv.config();

export const JWT_CONFIG = { jwtSecretKey: process.env.JWT_SECRET_KEY!, jwtExpireTime: process.env.JWT_EXPIRE_TIME! };

export const DB_CONFIG = {
  protocol: process.env.MONGO_PROTOCOL,
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DATABASE,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
};

/**
 *This is how we hide the database access info, while still being able to use it
 */
