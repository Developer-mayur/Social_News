import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import User from "./User.model.js";  

const Post = sequelize.define("Post", {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',   
      key: 'user_id',   
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "deleted by user", "deleted by admin"),
    defaultValue: "active",
  },
});

 sequelize.sync()
  .then(() => {
    console.log("Post table created...");
  })
  .catch((err) => {
    console.log("Error creating Post table...");
    console.log(err);
  });

export default Post;
