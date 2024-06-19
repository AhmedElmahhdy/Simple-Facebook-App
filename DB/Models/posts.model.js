import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../dbconnection.js";

export const post = sequelizeInstance.define("Posts",{
    Id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title :{
        type: DataTypes.STRING,
        allowNull : false
    },
    contant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDeleted:{
        type: DataTypes.ENUM('true','false'),
        allowNull: false,
        defaultValue: 'false'
    }
},{
    tableName: 'posts',
    timestamps: true
}); 






