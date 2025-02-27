import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    allowNull: false,
    defaultValue: "user",
  },
  channel_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

 sequelize.sync()
  .then(() => {
    console.log("User table created...");
  })
  .catch((err) => {
    console.log("Something went wrong...");
    console.log(err);
  });

export default User;
