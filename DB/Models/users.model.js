import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../dbconnection.js";
import { post } from "./posts.model.js";
import { Comment } from "./comment.model.js";

export const  = sequelizeInstance.define('Users',{
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true ,
            autoIncrement: true
        }
        ,
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(516),
          allowNull: false,
        },
      }, {
        tableName: 'users',
        timestamps: true,
      });

      
      

      
 User.hasMany(Comment)
 Comment.belongsTo(User)

 post.hasMany(Comment)
 Comment.belongsTo(post)

 User.hasMany(post, { foreignKey: 'authorId' });
 post.belongsTo(User, { foreignKey: 'authorId' });



