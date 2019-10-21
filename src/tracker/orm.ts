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

export class TrackEvent extends Model {}
TrackEvent.init(
  {
    rider_id: DataTypes.INTEGER,
    north: DataTypes.FLOAT,
    west: DataTypes.FLOAT,
    east: DataTypes.FLOAT,
    south: DataTypes.FLOAT
  },
  { modelName: "track_event", sequelize: db }
);

export function syncDB(): Promise<Sequelize> {
  return db.sync();
}
