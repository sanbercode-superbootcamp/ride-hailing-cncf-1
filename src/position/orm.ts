import { Sequelize, Model, DataTypes } from "sequelize";

const db = new Sequelize({
  database: process.env["POSTGRES_DATABASE"] || "ridehailing",
  username: process.env["POSTGRES_USERNAME"] || "postgres",
  password: process.env["POSTGRES_PASSWORD"] || "postgres",
  host: process.env["POSTGRES_HOST"] || "localhost",
  port: parseInt(process.env["POSTGRES_PORT"], 10) || 5432,
  dialect: "postgres",
  logging: false,
  timezone: "Asia/Jakarta"
});

export class DriverPosition extends Model {}
DriverPosition.init(
  {
    rider_id: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  },
  { modelName: "driver_position", sequelize: db }
);

export function syncDB(): Promise<Sequelize> {
  return db.sync();
}
