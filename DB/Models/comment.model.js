import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../dbconnection.js";


export const Comment = sequelizeInstance.define("Comments",{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: true,
    tableName : "comments"
})
 

