import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Vote = sequelize.define("Vote", {
  vote_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  post_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Post",
      key: "Post_id",
    },
  },
  voteType: {
    type: DataTypes.ENUM("real", "fake"),
    allowNull: false,
  },
  user_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "user_id",
    },
  },
});
sequelize
  .sync()
  .then(() => {
    console.log("vote table created");
  })
  .catch((err) => {
    console.log(err);
  });
export default Vote;
