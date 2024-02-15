import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TaskStatus = sequelize.define('task_status',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING 
    }
},{
    timestamps: false
});
