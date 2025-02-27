import database from "mime-db";
import sequelize from "../db/dbConfig";
import { DataTypes, ENUM } from "sequelize";
const Post=sequelize.define("post",{
    Comment_id:{
       type: DataTypes.STRING,
       autoIncrement:true
    },
    user_id:{
        type:DataTypes.STRING,
        references: {
            model: "user",
            key: "user_id",
          },
    },
    post_id:{
        type:DataTypes.STRING,
        references:{
            model:"post",
            key:"post_id"
        }
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM("active","deleted by user","deleted by Admin"),
        allowNull:false
    }
    

});